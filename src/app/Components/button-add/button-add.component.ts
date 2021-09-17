import { Component, Input, OnInit } from '@angular/core';
import { ApiConsumerService } from 'src/app/Services/api-consumer.service';
import { FormService } from '../../Services/form-service.service';

@Component({
  selector: 'button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  constructor(private formService: FormService, private apiConsumer: ApiConsumerService) { }

  ngOnInit(): void {
  }

  btnClick() {
    this.formService.formVisible(true, this.text);
    this.apiConsumer.svrItems(this.text);
  }

}
