import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-not-found-item',
  template: `
    <nb-card>
      <nb-card-body>
        <p>
          not-found-item works! {{msg}}
        </p>
        <button nbButton outline (click)="clickLoad.emit(1)">
          <nb-icon icon="close-outline"></nb-icon>
        </button>
      </nb-card-body>
    </nb-card>

  `,
  styles: []
})
export class NotFoundItemComponent {
  @Output() clickLoad = new EventEmitter<any>();
  @Input() msg: string;

  constructor() {
  }


}
