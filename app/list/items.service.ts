import { Injectable } from '@angular/core';
import {Item} from '../model/Item';

@Injectable()

export class ItemService{
    items : Item[];

    constructor(){
        this.items = [
            { id: 1, name:'Dawid'},
            { id: 2, name:'Michał'}
        ]
    }

    getFriends(){
        return this.items;
    }
}