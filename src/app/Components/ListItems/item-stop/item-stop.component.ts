import { Component, Input, OnInit } from '@angular/core';
import { Stop } from 'src/Models/Stop';

@Component({
  selector: 'app-item-stop',
  templateUrl: './item-stop.component.html',
  styleUrls: ['./item-stop.component.css']
})
export class ItemStopComponent implements OnInit {
  @Input() item!: Stop;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
