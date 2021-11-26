import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LauchSidenabService {
  dynamComponent$: any = new Subject<any>()
  dynamComponentResponse$: any = new Subject<any>()

  constructor() {
  }

  setDynamicComponent(component: any): any {
    this.dynamComponent$.next(component)
  }

  getDynamicHost(): Observable<any> {
    return this.dynamComponent$.asObservable();
  }

  getDynamicComponent(): Observable<any> {
    return this.dynamComponent$.asObservable();
  }

  setDynamicComponentResponse$(component: any) {
    this.dynamComponentResponse$.next(component)
  }

  getDynamicComponentResponse$(): Observable<any> {
    return this.dynamComponentResponse$.asObservable();
  }


}
