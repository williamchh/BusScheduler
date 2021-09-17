import { Component, Input, OnInit } from '@angular/core';
import { DropdownItem } from 'src/Models/Dropdown_Item';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropdownItems!: DropdownItem[];

  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.dropdownItems)
  }

  onSelect(e:any) {
    console.log(e.target.value);

  }

}
