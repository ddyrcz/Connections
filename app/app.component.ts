import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{appName}}</h1>',
  styles:[
    'h1{background:Blue; color: white; box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3); }'
  ]
})
export class AppComponent {
  public appName: string = 'Friends';
}
