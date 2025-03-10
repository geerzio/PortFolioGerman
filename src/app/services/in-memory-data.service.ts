import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    const works= [ 
    {
    "id": 1,
    "title":"Pam Argentina 2015-2023",
    "urlImage": "",
    "description": "Comence en la empresa Pam Argentina como cadete y luego me ascendieron al puesto de  administrativo comercial. Mi trabajo fue de back office consistio en: Venta de material  Descartables cx otorrino. Accesorios Implantes Cocleares. Insumos de pacientes laringectomizados. Armados de presupuestos. Facturación. Atención al cliente. Reclamos de pagos"    
    },

    {
    "id": 2,
    "title":"Martin Rousseaux SRL. 2023-Actualidad",
    "urlImage": "",
    "description": "Actualmente trabajo en la empresa Martin Rousseaux como desarrollador web. Mi puesto consiste en el desarrollo y mantenimiento de paginas web utilizando Angular y Java. Ademas otras de mis actividades es probar y depurar el codigo para tener un buen rendimiento del producto."
    }  
    ]
    return {works};
  };
  
}
