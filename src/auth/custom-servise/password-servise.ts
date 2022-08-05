import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ForgetPasswordService {
  constructor(private readonly mailerService: MailerService) {}

  public forgetPassword(message: string, email: string): void {
    this.mailerService
      .sendMail({
        to: email, // list of receivers
        from: 'noreply@nestjs.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: message, // plaintext body
        // html: '<h1>код востановление ${message}</h1>',
        // HTML body content
      })
      .then(() => {
        console.log('сообщение отправлено');
      })
      .catch((err) => {
        console.log('Ошибка', err);
      });
  }
}
