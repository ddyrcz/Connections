import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.main';
import { PanelComponent }   from './app.panel';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }  
