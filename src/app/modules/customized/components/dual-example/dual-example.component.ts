import {Component, OnInit} from '@angular/core';
import {ItemDual} from "../../../../interfaces/ItemDual";

@Component({
  selector: 'app-dual-example',
  template: `
    <nb-card>
      <nb-card-body>
        <app-dual-selector [source]="source" [destiny]="destiny" (saveAction)="saveAction($event)"></app-dual-selector>
      </nb-card-body>
    </nb-card>
  `,
  styles: []
})
export class DualExampleComponent implements OnInit {

  source: ItemDual[] = [{key: 2, title: 'test 2', unSelectable: false}];
  destiny: ItemDual[] = [{key: 1, title: 'test 1'}, {key: 3, title: 'test 3', unSelectable: true}];

  constructor() {
  }

  ngOnInit(): void {
  }

  saveAction(list: any[]) {
    console.table(list);
  }

}
