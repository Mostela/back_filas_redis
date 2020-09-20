import Fila from "../lib/Fila"

export default {
    async store (req, res){
        const {name, email, password} = req.body

        const user = {
            name, email, password
        }

        await Fila.add("RegistroDeEmail", {user})

        return res.json(user)
    }
}