import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customized',
  template: `
    <router-outlet>
    </router-outlet>
  `,
  styles: []
})
export class CustomizedComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
