import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'cd-main-nav',
  templateUrl: './cd-main-nav.component.html',
  styleUrls: ['./cd-main-nav.component.css']
})
export class CdMainNavComponent implements OnInit {

  constructor(private router: Router) { }

  openSettings() {
    this.router.navigate(['settings']);
  }

  ngOnInit() {
  }

}
