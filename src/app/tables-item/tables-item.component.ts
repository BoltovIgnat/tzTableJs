import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tr.currencies__item',
  templateUrl: './tables-item.component.html',
  styleUrls: ['./tables-item.component.scss']
})
export class TablesItemComponent implements OnInit {
  @Input() item;
  public isEdit;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  constructor() {}

  ngOnInit() {
      this.isEdit = false;
  }
    
  onDelete() {
      this.delete.emit();
  }
  
  onEdit() {
      this.isEdit = !this.isEdit;
      if (!this.isEdit) {
          this.edit.emit();
      }
  }
}
