import { Component } from '@angular/core';
import { Item } from '../model/Item';

@Component({
    selector: 'detail',
    moduleId: module.id,
    templateUrl: 'index.html',
    styleUrls: [
        'style.css'
    ]
})

export class DetailComponent {
    item: Item = {
        id: 1,
        name: 'Dawid'
    }
}