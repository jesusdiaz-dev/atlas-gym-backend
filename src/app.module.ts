import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { PlanModule } from './plan/plan.module';
import { SlotModule } from './slot/slot.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { MemberProfileModule } from './member-profile/member-profile.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost', // Usually 'localhost' for local dev
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres', // Default user is 'postgres'
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // This is great; it finds your @Entity() files automatically
      synchronize: true, // Only for development! It syncs your code with the DB schema

      retryAttempts: 10, // Try to connect 10 times before failing
      retryDelay: 3000,  // Wait 3 seconds between retries (useful while Docker starts)
    }),
    AuthModule, BookingModule, PlanModule,
    SlotModule, UserModule, MailModule,
    MemberProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
