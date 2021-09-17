import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiConsumerService } from 'src/app/Services/api-consumer.service';
import { Bus } from 'src/Models/Bus';
import { Arrival, TimeSchedule } from 'src/Models/Time_Schedule';

@Component({
  selector: 'app-item-bus',
  templateUrl: './item-bus.component.html',
  styleUrls: ['./item-bus.component.css']
})
export class ItemBusComponent implements OnInit {
  @Input() item!: Bus;
  @Output() arrivalTime: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private apiConsumer: ApiConsumerService) { }

  ngOnInit(): void {
  }

  getArrivalTime() {
    // get TimeSchedule arr
    this.apiConsumer.getObjArr("TimeSchedule")
      .subscribe(ts => {
        // find time schedule has same route name and line number from this.item
        // then get arrival hours and minutes by arrivalId
        const arrive = (ts.find(t => 
          t.routeName === this.item.route && t.lineNumber === this.item.lineNumber) as TimeSchedule) 
          .arrive.find(a => a.id === this.item.arrivalId);
        
        // emit arrival time to parent
        this.arrivalTime.emit(`${arrive?.arrive.hours}:${arrive?.arrive.minutes}`)
      })
  }

  delBus(bus: Bus) {
    this.apiConsumer
        .delIBus("Bus", bus)
        .subscribe(
          () => {
            const buses = this.apiConsumer
              .Items()
              .filter(b => 
                b.id !== bus.id
              );

            /// remove bus from array
            this.apiConsumer.setItems("Bus", buses);
          },
          err => {
            console.error(err)
            /// handle err
          }
        )
  }

}
