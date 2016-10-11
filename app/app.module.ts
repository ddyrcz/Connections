import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/app.list';
import { DetailsComponent } from './details/app.details';

@NgModule({
    imports: [BrowserModule],
    declarations: [ListComponent, DetailsComponent],
    bootstrap: [ListComponent]
})
export class AppModule { }
