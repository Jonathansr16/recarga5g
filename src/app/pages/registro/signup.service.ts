import { inject, Injectable } from '@angular/core';
import sendGrid from '@sendgrid/mail';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { 
    sendGrid.setApiKey(environment.sendGrid.API_KEY)
    
  }

  
  private toSend = environment.sendGrid.toSend;


  sendMail(templateHTML: string): Promise<void> {
    const msg = {
      to: this.toSend,
      from: this.toSend,
      subject: 'REGISTRO | VENTA DE TIEMPO AIRE',
      text: 'Tienes un nuevo cliente no lo hagas esperar!',
      html: templateHTML
    };

   return sendGrid
    .send(msg)
    .then( (resp) => {
      console.log('MAIL SENT')
    })
    .catch( (err) => {
      console.log(err)
    })

 
  }

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
}
