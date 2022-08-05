import { Module } from '@nestjs/common';
import { AuthController } from '@src/auth/auth.controller';
import { AuthService } from '@src/auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@src/auth/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { ForgetPasswordService } from '@auth/custom-servise/password-servise';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: `env/${(process.env.NODE_ENV || 'local').toLowerCase()}.env`,
      signOptions: { expiresIn: '1d' },
    }),
    MailerModule.forRoot({
      transport: {
        host: 'localhost',
        port: 3000,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.FROLOV_INCOMING_USER,
          pass: process.env.FROLOV_INCOMING_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      preview: true,
      // template: {
      //   dir: process.cwd() + '/template/',
      //   adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
      //   options: {
      //     strict: true,
      //   },
      // },
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, ForgetPasswordService],
})
export class AuthModule {}
