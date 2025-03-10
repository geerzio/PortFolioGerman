import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmailData} from "../models/EmailData";
import {from, Observable} from "rxjs";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  /*constructor(private httpClient: HttpClient) { }

  sendEmail(content: EmailData): Observable<any> {
    return this.httpClient.post("https://porfolio-email-sender-api.onrender.com/portfolio/send/", content);
  }*/


    private serviceId = 'service_himleng';
    private templateId = 'template_9r66i54';
    private userId = 'm6vc_B_G8sVAl_YN6'; 

    constructor() { }

  sendEmail(content: EmailData): Observable<EmailJSResponseStatus> {
    const templateParams = {
      from_name: content.email,      
      from_email: content.subject,    
      message: content.message,     
    };

    // emailjs.send devuelve una promesa, la convertimos en Observable con 'from'
    return from(emailjs.send(this.serviceId, this.templateId, templateParams, this.userId));
  }
}
