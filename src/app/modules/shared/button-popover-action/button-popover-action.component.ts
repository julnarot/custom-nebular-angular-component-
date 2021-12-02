import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


export interface ItemAction {
  id: string,
  title: string,
  icon: string,
  selectable: string,
  status: string,
}

@Component({
    selector: 'app-button-popover-action',
    template: `
        <button nbButton [nbPopover]="templateRef" nbPopoverPlacement="left" outline shape="round" status="basic"
                size="tiny">
            <nb-icon icon="more-vertical-outline"></nb-icon>
        </button>
        <ng-template #templateRef>
            <nb-card class="mb-0">
                <nb-list>
                    <nb-list-item *ngFor="let item of items" (click)="onSelect(item)"
                                  style="cursor: pointer"
                                  [ngClass]="{'text-muted': !isSelectable(item.selectable), 'text-danger': (item.status && isSelectable(item.selectable))}">
                        <nb-icon *ngIf="item.icon" [icon]="item.icon" class="me-2 "
                                 [status]="(item.status && isSelectable(item.selectable)) ? item.status : 'basic'"></nb-icon>
                        <small><b>{{item.title}}</b></small>
                    </nb-list-item>
                    <nb-list-item class="text-muted" [hidden]="items.length>0"><small>Sin acciones</small>
                    </nb-list-item>
                </nb-list>
            </nb-card>
        </ng-template>
    `,
    styles: []
})
export class ButtonPopoverActionComponent implements OnInit {
    @Output() optionSelected = new EventEmitter<string>();
    @Input() items: ItemAction[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    onSelect(item: any): void {
        if (item.selectable) {
            this.optionSelected.emit(item.id);
        }
    }

    isSelectable(val: string): boolean {
        return !!val && val === 'yes';
    }
}
