import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiConsumerService } from 'src/app/Services/api-consumer.service';
import { FormService } from 'src/app/Services/form-service.service';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

/// this is the parent class of all kinds of list items
export class ListViewComponent implements OnInit {
  title: string = "Stop";
  items!: any[]
  message!: string;
  messageVisible!: boolean;
  subscription!: Subscription;
  timeStr!: string;

  constructor(private formService: FormService, private apiConsumer: ApiConsumerService) { 
    this.items = [];
    this.title = formService.Title;
    this.messageVisible = formService.visible
  }

  ngOnInit(): void {
    this.apiConsumer.getItems().subscribe(
      v => {
        this.title = v.title;
        this.items = v.items;

        // sort list items 
        this.items = this.items.sort((a, b) => {
          return this.comparer(a, b, this.title) ? 1 : -1
        })

        // set message visibility
        this.messageVisible = this.formService.visible;

        // set error message
        this.message = (this.messageVisible && this.items.length === 0) 
        ? this.title + " is not available in Database, please add new " + this.title
        : "";
  
      }

    );
  }

  /// receive emitted bus arrival time
  getArrivalTime(timeStr: string) {
    this.timeStr = timeStr;
  }

  /// sorting list method 
  /// compare two objects according title
  /// <param> a: IBus </param>
  /// <param> b: IBus </param>
  /// <param> title:  </param>
  comparer(a: any, b: any, title: string): boolean {
    switch (title) {
      case "Stop":
        return a.code > b.code;

      case "Route":
        return a.routeName > b.routeName;
      case "Line":
        return a.lineNumber > b.lineNumber;
      case "Time Schedule":
        return a.lineNumber + a.routeName > b.lineNumber + b.routeName;

      case "Bus":
        return a.route + a.lineNumber + a.arrivalId > b.route + b.lineNumber + b.arrivalId;
        
      default:
        break;
    }
    return false;
  }

}
