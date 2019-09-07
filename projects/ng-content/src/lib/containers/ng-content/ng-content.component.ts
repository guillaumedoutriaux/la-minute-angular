import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-content',
  template: `
    ng-content works!
  `,
  styles: []
})
export class NgContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
