import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
// import {SimpleNode} from "../../interfaces/common-interfaces";
export interface SimpleNode {
  key: number,
  title: string,
  unSelectable?: boolean,
}

@Component({
    selector: 'app-tree-actions',
    template: `

        <div class="treeview">
            <ul>
                <ng-template #recursiveList let-list="list" let-par="par">
                    <li style="width: 400px">
                        <nb-card (click)="onAddItem(list, par)" class="plus-card">
                            <nb-card-header class="p-3 d-flex justify-content-center">
                                <nb-icon icon="plus"></nb-icon>
                            </nb-card-header>
                        </nb-card>
                    </li>
                    <ng-container *ngIf="list && list.length > 0">
                        <li *ngFor="let item of list" style="width: 400px">
                            <nb-card class="m-0" [accent]="item?.status">
                                <nb-card-header class="d-flex justify-content-between  align-content-center">
                                    <div style="cursor: pointer">
                                        <div class="d-flex justify-content-between">
                                            <nb-icon *ngIf="item.canAddChild"
                                                     (click)="onItemSelected('t', item,list )"
                                                     [icon]="item.selected ? 'arrow-right-outline': 'arrow-down-outline'"></nb-icon>
                                            <div (click)="onItemSelected('s', item,list);item.toggle=!item.toggle ">
                                                <span>{{ item?.title}}</span>
                                                <p class="m-0" *ngIf="item.toggle" data-toggle="tooltip"
                                                   data-placement="bottom"
                                                   title="{{item?.type}}: {{item?.subTitle || ''}}">
                                                    {{item?.subTitle || ''}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <app-button-popover-action [items]="item?.actions"
                                                               (optionSelected)="onItemSelected($event, item, list)"></app-button-popover-action>
                                </nb-card-header>
                            </nb-card>
                            <ul *ngIf="item.selected">
                                <ng-container
                                        *ngTemplateOutlet="recursiveList; context:{ list: item?.childs, par: item}"></ng-container>
                            </ul>
                        </li>
                    </ng-container>

                </ng-template>
                <ng-container *ngTemplateOutlet="recursiveList; context:{ list: data}"></ng-container>
            </ul>
        </div>
    `,
    styleUrls: ['./tree-actions.component.scss']
})
export class TreeActionsComponent implements OnInit {

    @Input() data: SimpleNode[] = [];

    @Output() addOnList = new EventEmitter<{ list: any[], item: any }>();
    @Output() itemSelected = new EventEmitter<{ action: string, item: any, list: any[] }>();

    constructor() {
    }


    ngOnInit(): void {
    }

    onAddItem(list: any[], parent: any) {
        this.addOnList.emit({list: list, item: parent});
    }

    onItemSelected(action: string, item: any, list: any[]) {
        this.itemSelected.emit({action, item, list});
    }

}
