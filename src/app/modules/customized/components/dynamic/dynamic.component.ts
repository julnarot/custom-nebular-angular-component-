import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
    <nb-card>
      <nb-card-body>
      </nb-card-body>
    </nb-card>
  `,
  styles: [
  ]
})
export class DynamicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
