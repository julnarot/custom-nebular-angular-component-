import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomizedComponent} from "./customized.component";
import {DualExampleComponent} from "./components/dual-example/dual-example.component";
import {DynamicComponent} from "./components/dynamic/dynamic.component";
import {ActionsPopoverComponent} from "./components/actions-popover/actions-popover.component";
import  { TreeExamplesComponent } from "./components/tree-examples/tree-examples.component";

const routes: Routes = [
  {
    path: '',
    component: CustomizedComponent,
    children: [
      {
        path: 'dual-selector',
        component: DualExampleComponent
      }, {
        path: 'dynamic-component',
        component: DynamicComponent
      }, {
        path: 'dynamic-acction-popover',
        component: ActionsPopoverComponent
      }, {
	path: 'tree',
	component: TreeExamplesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizedRoutingModule { }
