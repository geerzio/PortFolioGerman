import { Component } from '@angular/core';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact-section/contact/contact.component';
import { AboutMeComponent } from './components/about-me-section/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio-section/porfolio/portfolio.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { WorksDoneComponent } from './components/works-done/works-done.component';
import { WorksComponent } from './components/works/works.component';
import { InMemoryDataService } from '../app/services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    providers:[],
    imports: [HeaderComponent, WelcomeComponent, PortfolioComponent, AboutMeComponent, WorksDoneComponent,
    WorksComponent ,ContactComponent, FooterComponent,
    ToastContainerComponent,HttpClientModule 
    ],
    
})
export class AppComponent {
  title = 'myPorfolio';
}
