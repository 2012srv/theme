import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  items: any[] = [
    {value: 1, label: 'Item 1'},
    {value: 2, label: 'Item 2'},
    {value: 3, label: 'Item 3'},
    {value: 4, label: 'Item 4'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
