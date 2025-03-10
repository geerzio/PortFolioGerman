import { Component, Input, OnInit } from '@angular/core';
import { WorksComponent } from '../works/works.component';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { WorkModel } from 'src/app/models/works.model';
import { WORKS } from 'src/assets/files/mock-works';
import { WorkListService } from 'src/app/services/work-list.service';

@Component({
  selector: 'app-works-done',
  standalone: true,
  imports: [CommonModule, WorksComponent], // Agregar CommonModule y WorksComponent
  templateUrl: './works-done.component.html',
  styleUrl: './works-done.component.css'
})
export class WorksDoneComponent implements OnInit {

  @Input()
  title: string = "";

  workList: WorkModel[] = WORKS; // Aquí debería ser `workList`, no `worksList`

  work: string = "Experiencia laboral";

  constructor(private WorkListService: WorkListService) { }

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void {
    this.WorkListService.getWorks().subscribe({
      next: (resp) => {
        console.log("viendo", resp);
      },
      error: (e) => {
        alert("Ha ocurrido un error en traer los trabajos realizados");
        console.log(e);
      }
    });
  }
}
