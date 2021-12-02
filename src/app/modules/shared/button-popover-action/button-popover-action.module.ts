import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonPopoverActionComponent} from './button-popover-action.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbPopoverModule} from '@nebular/theme';


@NgModule({
    declarations: [ButtonPopoverActionComponent],
    imports: [
        CommonModule,
        NbButtonModule,
        NbIconModule,
        NbPopoverModule,
        NbCardModule,
        NbListModule,
    ],
    exports: [ButtonPopoverActionComponent]
})
export class ButtonPopoverActionModule {
}
