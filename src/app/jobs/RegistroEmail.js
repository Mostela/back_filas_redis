import Mail from "../lib/Mail"


export default {
    key: "RegistroDeEmail",
    async handle({data}){
        const { user } = data

        await Mail.sendMail({
            from: "Teste de fila <teste@testefila.com.br>",
            to: `${user.name} ${user.email}`,
            subject: "Cadastro de usuario",
            html: `Ola ${user.name} Bem vindo ao meu sistema de fila`
        })
    }
}