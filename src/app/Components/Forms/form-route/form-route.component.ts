import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from 'src/app/Services/api-consumer.service';
import { BusRoute } from 'src/Models/Bus_Route';
import { DropdownItem } from 'src/Models/Dropdown_Item';
import { Stop } from 'src/Models/Stop';

@Component({
  selector: 'app-form-route',
  templateUrl: './form-route.component.html',
  styleUrls: ['./form-route.component.css']
})
export class FormRouteComponent implements OnInit {
  stops!: Stop[];
  routeName!: string;
  dropdownItems!: DropdownItem[];

  constructor(private apiConsumer: ApiConsumerService) {
    this.routeName = "";
    this.stops = [];
    this.apiConsumer.svrSubItems("Stop");
  }

  ngOnInit(): void {
    this.apiConsumer
      .getSubItems()
      .subscribe(v => {
        this.dropdownItems = (v.items as Stop[]).map(stop => {
          return { value: stop.sequence, code: stop.code };
        })
      })

  }

  /// delete stop from this.stops array
  /// <param> seq: number sequence of stops </param>
  delStop(seq: number) {

    // filter stop sequence not equal to seq
    this.stops = this.stops
      .filter(s => s.sequence != seq)

    // reorder sequence 
    this.reorderStopsSequence()  
  }

  /// add stop to this.stops array
  addStop(item: DropdownItem){

    // assign new sequence
    let seq = 1;
    if(this.stops.length > 0) seq = this.stops[this.stops.length - 1].sequence + 1;
    
    // create new stop obj
    const _stop: Stop = {
      code: item.code, 
      sequence: seq,
      IsEqual: (s: Stop) => item.code === s.code,
    }

    // push stop to stops array
    this.stops.push(_stop)

    // reorder stop sequence
    this.reorderStopsSequence()  
  }


  /// reorder stops' sequence 
  reorderStopsSequence(): void {
    this.stops = this.stops.map(item => {
      let _stop = item;
      _stop.sequence = this.stops.indexOf(item) + 1
      return _stop
    })
  }

  onSubmit() {

    if (this.routeName === null || this.routeName.trim() === "") {
      alert('Route Name CAN NOT Emptny');
      return;
    }

    // create new bus route obj
    const _route: BusRoute = {
      routeName: this.routeName, 
      stops: this.stops,
      IsEqual:(route: BusRoute) => {
        return this.routeName === route.routeName;
      },
    }

    if (_route.stops.length > 0) {
      // add new route obj to db
      this.apiConsumer.addItems("Route", _route);      
    }
    else {
      alert('Stops CAN NOT Emptny');
      return;
    }
  }

}
