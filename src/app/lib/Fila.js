import Queue from 'bull'
import redisConfig from '../../config/Redis'

import * as jobs from '../jobs'

const filas = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle
}))


export default {
    filas,

    add(name, data){
        const fila = this.filas.find(fil => fil.name === name);
        return fila.bull.add(data);
    },

    process(){
        return this.filas.forEach(queen => {
            queen.bull.process(queen.handle)
            
            queen.bull.on('failed', (job) => {
                console.log("Job Failed", job.data)
            })
        })
    }
}