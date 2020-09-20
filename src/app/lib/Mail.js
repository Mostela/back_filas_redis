import nodemail from "nodemailer"
import mailConfig from '../../config/mail'


export default nodemail.createTransport(mailConfig)