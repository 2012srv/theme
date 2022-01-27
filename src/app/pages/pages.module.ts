import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './components/table/table.component';
import { NgbdSortableHeader } from './components/table/sortable.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    DashboardComponent, TableComponent, NgbdSortableHeader, ProjectComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    NgSelectModule
  ]
})
export class PagesModule { }
