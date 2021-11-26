import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomizedComponent} from "./customized.component";
import {DualExampleComponent} from "./components/dual-example/dual-example.component";
import {DynamicComponent} from "./components/dynamic/dynamic.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizedRoutingModule { }
