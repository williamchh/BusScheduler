import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from 'src/app/Services/api-consumer.service';
import { BusLine } from 'src/Models/Bus_Line';
import { BusRoute } from 'src/Models/Bus_Route';

@Component({
  selector: 'app-form-line',
  templateUrl: './form-line.component.html',
  styleUrls: ['./form-line.component.css']
})
export class FormLineComponent implements OnInit {
  busRoutes!: BusRoute[]
  lineNumber!: number
  lineRoutes!: BusRoute[]
  constructor(private apiConsumer: ApiConsumerService) { 
    this.busRoutes = [];
    this.lineRoutes = [];
    this.apiConsumer.svrSubItems("Route");
  }

  ngOnInit(): void {
    this.apiConsumer
      .getSubItems()
      .subscribe(r => {
        this.busRoutes = r.items;
      })
  }

  onSubmit(): void {

    // at lease has one route
    if (this.lineRoutes.length === 0) {
      alert("Bus Line Must Have at Least One Route");
      return;
    }
    // line number must not empty
    else if (!this.lineNumber) {
      alert("Bus Line Number Must not Empty");
      return;
    }
    else {
      // create new busLine obj
      const _line: BusLine = { 
        lineNumber: this.lineNumber, 
        busRoutes: this.lineRoutes.map(r => r.routeName),
        IsEqual: (line: BusLine) => {
          return this.lineNumber === line.lineNumber;
        },
      }
  
      // post line to db
      this.apiConsumer.addItems("Line", _line);
    }
  }

  /// add busRoute pass in to this.lineRoutes array
  addRoute(busRoute: BusRoute) {

    // if bus route pass in is not in this.lineRoutes array
    if (!this.lineRoutes.includes(busRoute)) {
      this.lineRoutes.push(busRoute)
    }
  }

  /// elimit busRoute pass in from this.lineRoutes array
  delRoute(busRoute: BusRoute) {
    this.lineRoutes = this.lineRoutes.filter(r => r.routeName != busRoute.routeName);
  }

}
