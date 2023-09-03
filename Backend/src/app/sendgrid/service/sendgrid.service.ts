import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { SendEmailInterface } from '../interface/send-email.interface';
import { lastValueFrom } from 'rxjs'

@Injectable()
export class SendgridService {
    
    constructor(private readonly httpService: HttpService){}
    private readonly SENDGRID_API_URL = process.env.SENDGRID_API_URL;
    private readonly SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    async sendEmail(data: SendEmailInterface): Promise<boolean>{
        const url = `${this.SENDGRID_API_URL}/mail/send`;
        const config = {
            headers:{
                Authorization: `Bearer ${this.SENDGRID_API_KEY}`
            },
        };
        const response = await lastValueFrom(this.httpService.post(url, data, config));
        console.log(response.data);
        return response.status == HttpStatus.ACCEPTED;
    }
}
