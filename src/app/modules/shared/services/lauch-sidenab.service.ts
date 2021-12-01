import {ComponentFactoryResolver, Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ContainerDynamDirectiveComponent} from "../basics/components/container-dynam-directive.component";
import {NbSidebarService} from "@nebular/theme";

@Injectable({
  providedIn: 'root'
})
export class LauchSidenabService {
  containerDynamDirectiveComponent: ContainerDynamDirectiveComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  onLauchComponent(component: any): any {
    this.containerDynamDirectiveComponent.dynamicHost.viewContainerRef.clear();
    return this.containerDynamDirectiveComponent.dynamicHost.viewContainerRef
      .createComponent(
        this.componentFactoryResolver.resolveComponentFactory(component)
      );
  }

}
