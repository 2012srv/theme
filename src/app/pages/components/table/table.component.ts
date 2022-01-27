import {DecimalPipe} from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import {Observable} from 'rxjs';

import {Country} from './country';
import {CountryService} from './country.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [CountryService, DecimalPipe]
})
export class TableComponent {
  @Input('class') classLabel: string = 'custom-table-1'; 
  countries$: Observable<Country[]>;
  total$: Observable<number>;
  pageSizeOpt: any[] = [
    {value:2, label:'2 items per page'},
    {value:4, label:'4 items per page'},
    {value:6, label:'6 items per page'},
  ]

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(
    public service: CountryService
  ) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
