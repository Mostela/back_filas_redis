import 'dotenv/config';
import express from "express"
import userControl from "./app/controllers/Users"
import BullBoard from 'bull-board';
import Queue from './app/lib/Fila'

const app = express()
BullBoard.setQueues(Queue.filas.map(fila => fila.bull))

app.use(express.json())

app.post("/users", userControl.store)

app.use('/admin/filas', BullBoard.UI)

app.listen(3333, () => {
    console.log("Server is running! http://127.0.0.1:3333")
})


export { app }