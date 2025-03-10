import { Component, Input, OnInit } from '@angular/core';
import { WorksDoneComponent } from '../works-done/works-done.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit {
  
  @Input()
  workData: any;

  ngOnInit(): void {
    console.log("viendo 1 ", this.workData)    
  }

}
