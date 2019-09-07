import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-content',
  template: `
    <p>
      ng-content works!
    </p>
  `,
  styles: []
})
export class NgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
