import { ServiceService } from './../../service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {

  @Input()
  sidenav_opened: boolean = true;

  constructor() {}

  ngOnInit(): void {

  }


}
