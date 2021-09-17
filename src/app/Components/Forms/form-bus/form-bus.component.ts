import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from 'src/app/Services/api-consumer.service';
import { Bus } from 'src/Models/Bus';
import { BusLine } from 'src/Models/Bus_Line';
import { BusRoute } from 'src/Models/Bus_Route';
import { TimeSchedule } from 'src/Models/Time_Schedule';

@Component({
  selector: 'app-form-bus',
  templateUrl: './form-bus.component.html',
  styleUrls: ['./form-bus.component.css']
})
export class FormBusComponent implements OnInit {
  lines!: BusLine[]
  bus!: Bus
  timeSchedules!:TimeSchedule[]

  constructor(private apiConsumer: ApiConsumerService) {
    this.timeSchedules = []
    this.apiConsumer.svrSubItems("Time Schedule");
   }

  ngOnInit(): void {
    this.apiConsumer.getSubItems()
      .subscribe(i => {
        this.timeSchedules = i.items
      })
  }

  
  selectRoute(route: string, lineNumber: number, arrivalId: number) {
    this.bus = {
      route: route,
      lineNumber: lineNumber,
      arrivalId: arrivalId,
      IsEqual: (bus: Bus) => {
        return  bus.route === route && 
                bus.lineNumber === lineNumber && 
                bus.arrivalId === arrivalId;
      },
    }
  }

  onSubmit() {
    this.apiConsumer.addItems('Bus', this.bus)
  }
}
