import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/app.list';
import { DetailComponent } from './detail/app.detail';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ListComponent, DetailComponent],
    bootstrap: [DetailComponent]
})
export class AppModule { }
