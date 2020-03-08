import { Component } from '@angular/core';
import { TableMetadata } from './table/model/table-metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bss-angular-smart-table';
  public tableMetadata: TableMetadata = {
    filtrable: true,
    sortable: true,
    columns: [{
      path: "firstName",
      title: "First Name",
      visible: true
    }, {
      path: "lastName",
      title: "Last Name",
      visible: true
    }]
  };
  public data = [{
    firstName: "Alin",
    lastName: "Bizau"
  }, {
    firstName: "Cristina",
    lastName: "Sabau"
  }];
}
