import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-examples',
  template: `
    <nb-card> 
      <nb-card-header> Tree Example
    </nb-card-header>
      <nb-card-body> 
	<!--nb-card></nb-card-->
	<app-tree-actions [data]="data"></app-tree-actions>
      </nb-card-body>
    </nb-card>
  `,
  styles: [
  ]
})
export class TreeExamplesComponent implements OnInit {

  data = [{
    key: 1, 
    title: 'module 1', 
    canAddChild: true, 
    unSelectable: false,
    selected: true,
    childs: [{
      key: 2, 
      title: 'SubModule 1',
      childs: []}]}];
  constructor() { }

  ngOnInit(): void {
  }

}
