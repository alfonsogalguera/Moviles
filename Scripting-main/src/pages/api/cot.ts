import { VercelRequest, VercelResponse } from '@vercel/node';

const nodemailer = require(`nodemailer`);

export default (request: VercelRequest, response: VercelResponse) => {
  const { name, email, phone, products } = request.body;
  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: `smtp.gmail.com`,
    auth: {
      user: `scripting.mexico@gmail.com`,
      pass: `Sc1pt1ngM3x1c0`,
    },
    secure: true,
  });
  const mailData = {
    from: `scripting.mexico@gmail.com`, // sender address
    to: `ventas@scripting.business`, // list of receivers
    subject: `Correo enviado automaticamente`,
    text: ``,
    html: `<b>Hola Equipo!</b><br>El usuario:${name} necesita que se comuniquen con el.<br/><br>Los datos son los siguientes:<br/><br>${name}</br><br>${email}</br><br>${phone}</br><br>${products}</br>`,
  };
  transporter.sendMail(mailData, (err: any) => {
    if (err) response.status(300).send(err);
    else response.status(200).send({ message: `Mail send` });
  });
};
