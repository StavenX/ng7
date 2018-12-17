import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // TypeScript way to define a value
  appTitle: string = 'Skeleton';

  public href : string = '';
  url: string = '';

  // JavaScript way to define a value
  //appTitle = 'myApp';

  constructor(private router : Router) { }

  ngOnInit() {
    this.href = this.router.url;
  }

}
