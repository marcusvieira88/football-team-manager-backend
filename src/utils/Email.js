import nodemailer from "nodemailer";
import logger from "./Logger";

export default class Email {

    /**
     * Send confirmation email
     * @param email - receiver email
     * @param hash - used for identify user
     */
    static sendConfirmation(email, hash) {
        const link = '&lt;input id="confirmEmail" type="button" value="Confirmar email!" onclick="confirmEmail();" /&gt;&lt;script&gt;function confirmEmail() {return fetch(\'http://localhost:3000/graphql/v1/%20-H%20\'Content-Type:%20application/json\'%20-d%20\'%7B?\', {method: \'post\',headers: {\'Accept\': \'application/json\',\'Content-Type\': \'application/json\'},body: \'{\"query\": \"mutation($data: ConfirmUserEmail!) { confirmEmail(data: $data) }\",\"variables\": {\"data\": {\"hash\": \"'+ hash +'\"}}}\',})}&lt;/script&gt';
        Email.send(email,'Família SDV - Confirme seu e-mail! ⚽',
            `Clique no link para confirmar seu email ${link}`);
    }

    /**
     * Send reset password
     * @param email - receiver email
     * @param hash - used for identify user
     */
    static sendResetPassword(email, hash) {
        Email.send(email,'Família SDV - Recuperação de Senha! ⚽',
            `Clique no link para cadastrar uma nova senha ${hash}`);
    }

    /**
     * Send email
     * @param email - receiver email
     * @param subject - email subject
     * @param content - email content
     */
    static send(email, subject, content) {
        logger.info(`Send email to ${email} subject ${subject} and ${content}`);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });

        const mailOptions = {
            from: 'sodevirada@gmail.com',
            to: email,
            subject: subject,
            html: content
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                logger.error(err);
            } else {
                logger.info(`Message sent to ${email}!`);
            }
        });
    }
}
