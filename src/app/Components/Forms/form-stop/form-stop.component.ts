import { sequence } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from 'src/app/Services/api-consumer.service';
import { Stop } from 'src/Models/Stop';

@Component({
  selector: 'app-form-stop',
  templateUrl: './form-stop.component.html',
  styleUrls: ['./form-stop.component.css']
})
export class FormStopComponent implements OnInit {
  code!: string;
  constructor(private apiConsumer: ApiConsumerService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // validate form
    // if code is empty, show alter then terminate this process
    if (!this.code) {
      alert('Stop Code CAN NOT Emptny');
      return;
    }

    // create new stop obj
    const newStop: Stop = {
      code: this.code,
      sequence: -1,
      IsEqual: (stop: Stop) => {
        return this.code === stop.code;
      },
    };

    // add stop to db
    this.apiConsumer.addItems("Stop", newStop);

    // clear code input 
    this.code = "";
  }

}
