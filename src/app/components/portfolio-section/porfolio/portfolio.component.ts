import {Component} from '@angular/core';
import {ProjectCardComponent} from "../project-card/project-card.component";
import {CardData} from "../models/card-data";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [
    ProjectCardComponent,
    NgTemplateOutlet
  ],
  standalone: true
})
export class PortfolioComponent {
  cards: Array<CardData> = new Array<CardData>();

  constructor() {

    const technologyModules: CardData = {
      title: "Technology Modules",
      description: "Sistema de servicio de control de stock destinado para pequeñas pymes, medianas empresas y grandes. Interfaces de facil uso para el todo el circuito de los manejos de productos.",
      sourceCodeLink: "https://technologymodules.com.ar",
      createdWith: ["Html", "CSS", "PHP", "MYSQL", "JS", ],
      imageSrc: "assets/img/technology-modules.png"
    } as CardData

    const supplyTechnology: CardData = {
      title: "Gestión de abastecimiento Supply technology",
      description: "Trabajo final de la materia POO en la tecnicatura de software.En este sistema se puede realizar toda la gestion de proveedores, ventas, articulos, y clientes. Todos las secciones cuentan con su menu y las acciones de edición y eliminar. El trabajo se realizo con el motor de busqueda MariaDB.",
      sourceCodeLink: "https://github.com/LERV1993/gestionComercial.git",
      createdWith: ["Python", "MariaDB"],
      imageSrc: "assets/projects/inventory.webp"
    } as CardData

    const bigData: CardData = {
      title: "Proyecto final Big Data",
      description: "Trabajo final del curso codo a codo, este fue desarrollado con previos trabajos en DeepNote y por ultimo los graficos realizados en LookerStudio.",
      sourceCodeLink: "https://lookerstudio.google.com/u/0/reporting/a1c9a72a-1870-4903-8f47-a7280332d74f/page/M1LhD",
      createdWith: ["Looker Studio"],
      imageSrc: "assets/img/looker.webp"
    } as CardData

    // ACA PODRIA PONER EL DE MOBIL 


    this.cards.push(technologyModules);
    this.cards.push(supplyTechnology);
    this.cards.push(bigData)
  }
}
