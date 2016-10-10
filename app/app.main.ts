import { Component } from '@angular/core';
@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: 'main/main.html',
  styleUrls:[
    'main/main.css'
  ]
})
export class AppComponent {
  public appName: string = 'Friends';
}
