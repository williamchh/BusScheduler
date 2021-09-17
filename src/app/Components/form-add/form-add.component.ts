import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../../Services/form-service.service';

@Component({
  selector: 'form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})

/// this is the parent class of all forms
export class FormAddComponent implements OnInit {
  @Input() title: string = "";
  @Input() visible: boolean = false;

  
  subscription!: Subscription;

  constructor(private formService: FormService) {
    this.subscription = this.formService
      .toggleVisible()
      .subscribe(
        v => {
          this.visible = v.visible;
          this.title = v.title;
        }
      );
  }

  ngOnInit(): void {

  }
  onSubmit(){
  }
}
