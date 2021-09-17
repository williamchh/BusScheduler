import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-route',
  templateUrl: './item-route.component.html',
  styleUrls: ['./item-route.component.css']
})
export class ItemRouteComponent implements OnInit {
  @Input() item!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
