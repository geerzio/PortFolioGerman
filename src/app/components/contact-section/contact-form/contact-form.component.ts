import {Component, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import {EmailService} from "../../../services/email.service";
import {EmailData} from "../../../models/EmailData";
import {Subscription, takeUntil} from "rxjs";
import {ToastService} from "../../../services/toast.service";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class ContactFormComponent implements OnDestroy {


  form: FormGroup = this.fb.group({});
  private subs: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private emailService: EmailService, private toastService: ToastService) {
    this.form = this.fb.group({
      email: [  "", [Validators.required, Validators.email]],
      subject: [ "",  [Validators.required]],
      message: [ "", [Validators.required]]
    })
  }

  onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let newEmail = new EmailData(this.form.value);
 
    this.toastService.show("El mensaje se esta enviando, esto puede tardar unos segundos",
      "bg-info text-light");

    this.subs.add(this.emailService.sendEmail(newEmail).subscribe({
        next: (res) => {
          console.log(res);
          alert("Mensaje enviado con éxito!");
          this.form.reset();
        },
        error: (e) => { 
          console.log(e)
          alert("No se ha podido enviar el email");
          this.form.reset();
         }
      }
    ));


  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
