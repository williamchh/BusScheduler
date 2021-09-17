import { Component, Input, OnInit } from '@angular/core';
import { TimeSchedule } from 'src/Models/Time_Schedule';

@Component({
  selector: 'app-item-timeschedule',
  templateUrl: './item-timeschedule.component.html',
  styleUrls: ['./item-timeschedule.component.css']
})
export class ItemTimescheduleComponent implements OnInit {
  @Input() item!: TimeSchedule;
  constructor() { }

  ngOnInit(): void {
  }

}
