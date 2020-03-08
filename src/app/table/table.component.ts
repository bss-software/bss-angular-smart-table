import { Component, OnInit, Input } from '@angular/core';
import { TableMetadata } from './model/table-metadata';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() tableMetadata: TableMetadata;
  @Input() data: Array<T>
  
  constructor() { }

  ngOnInit(): void {
  }

}
