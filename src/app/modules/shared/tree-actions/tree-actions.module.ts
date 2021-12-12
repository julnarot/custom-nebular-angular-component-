import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeActionsComponent} from './tree-actions.component';
import {ButtonPopoverActionModule} from "../button-popover-action/button-popover-action.module";
import {NbCardModule, NbIconModule} from "@nebular/theme";


@NgModule({
    declarations: [
        TreeActionsComponent
    ],
    imports: [
        CommonModule,
        ButtonPopoverActionModule,
        NbCardModule,
        NbIconModule
    ],
    exports: [
        TreeActionsComponent,
    ]
})
export class TreeActionsModule {
}
