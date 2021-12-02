import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizedRoutingModule } from './customized-routing.module';
import { CustomizedComponent } from './customized.component';
import { DualExampleComponent } from './components/dual-example/dual-example.component';
import {DualSelectorModule} from "../shared/dual-selector/dual-selector.module";
import {BasicsModule} from "../shared/basics/basics.module";
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { ActionsPopoverComponent } from './components/actions-popover/actions-popover.component';
import {ButtonPopoverActionModule} from "../shared/button-popover-action/button-popover-action.module";


@NgModule({
  declarations: [
    CustomizedComponent,
    DualExampleComponent,
    DynamicComponent,
    ActionsPopoverComponent
  ],
    imports: [
        CommonModule,
        CustomizedRoutingModule,
        DualSelectorModule,
        BasicsModule,
        ButtonPopoverActionModule
    ]
})
export class CustomizedModule { }
