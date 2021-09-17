import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from 'src/app/Services/api-consumer.service';
import { BusLine } from 'src/Models/Bus_Line';
import { Stop } from 'src/Models/Stop';
import { TimeSchedule } from 'src/Models/Time_Schedule';

@Component({
  selector: 'app-time-schedule',
  templateUrl: './time-schedule.component.html',
  styleUrls: ['./time-schedule.component.css']
})
export class TimeScheduleComponent implements OnInit {
  timeSchedule!: TimeSchedule
  lines!: BusLine[]
  arrivalTime!: string;
  route!: string

  constructor(private apiConsumer: ApiConsumerService) { 
  
    this.lines = [];
    this.apiConsumer.svrSubItems("Line");
  }

  ngOnInit(): void {
    this.apiConsumer.getSubItems()
      .subscribe(l => {
        this.lines = l.items;
      })
      
  }

  selectRoute(route: string, lineNumber: number){
    this.route = route;

    // get Time Schedule arr from api consumer service
    const its = this.apiConsumer.Items() as TimeSchedule[];

    // try to get time schedule with same line number and route name
    let ts = its.find(t => t.lineNumber === lineNumber && t.routeName === route);

    // if found existing time schedule
    if (ts) {
      this.timeSchedule = ts
    }
    // if not found
    else {

      // get route and route initial stop
      this.apiConsumer
          .getObjArr("Route")
          .subscribe(r => {

            // find correct route
            let rs = r.find(r => r.routeName === route);

            // create new time schedule object with zero arrival
            const _schedule: TimeSchedule = { 
              lineNumber: lineNumber, 
              routeName: rs!.routeName, 
              firstStopCode: rs!.stops[0].code, 
              arrive: [],
              IsEqual:(schedule: TimeSchedule) => {
                return lineNumber === schedule.lineNumber
                && rs!.routeName === schedule.routeName
                && rs!.stops[0].code === schedule.firstStopCode
              },
            }
            
            this.timeSchedule = _schedule
          })

    }
    
  }

  onSubmit(){

    if (!this.arrivalTime) {
      alert("please input arrival time");
      return;
    }

    if (!this.timeSchedule) {
      alert("please select a bus line and route");
      return;
    }

    // get initial stop arrival time array
    const times = this.arrivalTime.split(":");

    // find arrives array length
    // set new arrival obj's id = length + 1
    const _id = this.timeSchedule.arrive.length + 1;

    // push new arrival to time schedule arrive[]
    this.timeSchedule.arrive.push({ id: _id, arrive:{ hours: times[0], minutes: times[1] }});
    this.timeSchedule.IsEqual = (schedule: TimeSchedule) => {
      return schedule.routeName === this.timeSchedule.routeName &&
      schedule.lineNumber === this.timeSchedule.lineNumber &&
      schedule.arrive.length === this.timeSchedule.arrive.length;
    }
    
    // time schedule array length greater than one
    // means it is an existing time schedule
    if (this.timeSchedule.arrive.length > 1) {
      
      // sort time schedule order by arrive time
      this.timeSchedule.arrive = this.sortArrivals();

      /// update record
      this.apiConsumer.updateItem("Time Schedule", this.timeSchedule);
    }
    else {
      /// post new time schedule
      this.apiConsumer.addItems("Time Schedule", this.timeSchedule);
    }
  }

  /// sort arrival time by hours and minutes
  sortArrivals() {
    let _arr = this.timeSchedule
        .arrive
        .sort((a, b) => {
            return (a.arrive.hours + a.arrive.minutes) < (b.arrive.hours + b.arrive.minutes) ? -1 : 1
          }
        )
      

    // resort arrival id
    _arr = _arr.map(a => {
        a.id = _arr.indexOf(a) + 1
        return a;
      })

    return _arr;
  }

}
