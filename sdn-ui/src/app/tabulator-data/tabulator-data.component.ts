import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AuthService } from '../auth.service';
import Tabulator from 'tabulator-tables';

@Component({
  selector: 'app-tabulator-data',
  templateUrl: './tabulator-data.component.html',
  styleUrls: ['./tabulator-data.component.scss']
})
export class TabulatorDataComponent implements OnChanges {
  @Input() tableData: any[] = [];
  @Input() columnNames: any[] = [];
  @Input() height: string = '311px';
  // list properties you want to set per implementation here...

  tab = document.createElement('div');

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable();
  }

  private drawTable(): void {
    new Tabulator(this.tab, {
      data: this.tableData,
      reactiveData:true, //enable data reactivity
      columns: this.columnNames,
      layout: 'fitData',
      height: this.height
    });
    document.getElementById('my-tabular-table').appendChild(this.tab);
  }
}

// @Component({
//   selector: 'app-tabular-data',
//   templateUrl: './tabular-data.component.html',
//   styleUrls: ['./tabular-data.component.css']
// })
// export class TabularDataComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
