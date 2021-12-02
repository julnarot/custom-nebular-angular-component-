import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-actions-popover',
  templateUrl: './actions-popover.component.html',
  styles: []
})
export class ActionsPopoverComponent implements OnInit {
  actions: any[] = [
    {
      id: '1',
      title: 'Editar',
      icon: 'edit-outline',
      selectable: 'string',
      status: 'string'
    }, {
      id: '2',
      title: 'Eliminar',
      icon: 'trash-outline',
      selectable: 'string',
      status: 'string'
    }
  ]
  action: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onItemSelected(action: any) {
    this.action = action;
  }

}
