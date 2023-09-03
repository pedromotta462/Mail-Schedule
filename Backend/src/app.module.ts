import { Module } from '@nestjs/common';
import { SendgridModule } from './app/sendgrid/sendgrid.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), SendgridModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
