import { Component, Input, OnInit } from '@angular/core';
import { BusLine } from 'src/Models/Bus_Line';

@Component({
  selector: 'app-item-line',
  templateUrl: './item-line.component.html',
  styleUrls: ['./item-line.component.css']
})
export class ItemLineComponent implements OnInit {
  @Input() item!: BusLine;
  constructor() { }

  ngOnInit(): void {
  }

}
