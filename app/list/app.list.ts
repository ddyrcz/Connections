import { Component } from '@angular/core';
import {Item} from '../model/Item';
import { ItemService } from './items.service';

@Component({
    selector: 'list',
    moduleId: module.id,
    templateUrl: 'index.html',
    styleUrls: [
        'style.css'
    ],
    providers: [ItemService]
})


export class ListComponent {
    items: Item[];

    constructor(private _itemsService: ItemService) {
        this.items = _itemsService.getFriends();
    }

}