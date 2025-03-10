/// <reference types="@angular/localize" />



import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/new-model/new-model.module';
//import { AppComponent } from './app.component';

/*platformBrowserDynamic().bootstrapComponent(AppComponent)
  .catch(err => console.error(err));*/

// main.ts
/*import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';*/



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(ReactiveFormsModule, ClipboardModule, NgbModule),
  ],
}).catch(err => console.error(err));
