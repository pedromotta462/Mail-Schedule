import { Module } from '@nestjs/common';
import { SendgridService } from './service/sendgrid.service';
import { HttpModule } from '@nestjs/axios';
import { SendgridController } from './sendgrid.controller';

@Module({
  imports: [HttpModule],
  providers: [SendgridService],
  controllers: [SendgridController],
})
export class SendgridModule {}
