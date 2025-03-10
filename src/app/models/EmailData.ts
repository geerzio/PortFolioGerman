export class EmailData {
  email: string = ""; // el que envia el email
  subject: string = "";
  message: string = "";

  constructor (data:any){
    this.email = data.email;
    this.subject = data.subject;
    this.message = data.message;
  }
}

