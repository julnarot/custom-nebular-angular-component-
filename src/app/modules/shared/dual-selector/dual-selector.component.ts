import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ItemDual} from "../../../interfaces/ItemDual";

@Component({
  selector: 'app-dual-selector',
  templateUrl: './dual-selector.component.html',
  styles: ['.selectable {cursor: pointer} .unselectable {cursor: not-allowed}']
})
export class DualSelectorComponent implements OnInit {
  item: any = {};
  searchingSource = false;
  searchingDestiny = false;
  @Input() destiny: ItemDual[] = [];
  @Input() source: ItemDual[] = [];
  @Input() title = 'Example';
  @Output() saveAction = new EventEmitter<any[]>()

  constructor() {

  }

  ngOnInit(): void {
  }


  addToDestiny(item: ItemDual) {
    const destinyIndex: number = this.source.findIndex((f: ItemDual) => f.key === item.key);
    if (destinyIndex >= 0) {
      this.source.splice(destinyIndex, 1);
      this.destiny.push(item);
    }
  }

  restoreItem(item: ItemDual) {
    if (!item.unSelectable) {
      const destinyIndex: number = this.destiny.findIndex((f: ItemDual) => f.key === item.key);
      if (destinyIndex >= 0) {
        this.destiny.splice(destinyIndex, 1);
        this.source.push(item);
      }
    }

  }

///////// end custom dual selecter
  onSave() {
    this.saveAction.emit([...this.destiny.map(m => {
      return {key: m.key, title: m.title}
    })])
  }

}
