import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgOptimizedImage, provideCloudinaryLoader} from "@angular/common";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true,
  providers: [
    provideCloudinaryLoader('https://res.cloudinary.com/dqydqgfyk')
  ]
})
export class WelcomeComponent implements OnInit , OnDestroy {


  currentIndex = 0;  // Índice de la imagen activa
  intervalId: any;    // ID para limpiar el intervalo

  ngOnDestroy(): void {
  clearInterval(this.intervalId);  }


  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 3;  // Cambia según el número de imágenes
    }, 5000);  
  }

}
