import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'singleFilter'
})
export class SingleFilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.title.indexOf(filter) !== -1);
  }

}
