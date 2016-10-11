import { Injectable } from '@angular/core';
import {Item} from './Item';

@Injectable()

export class ItemService{
    items : Item[];

    constructor(){
        this.items = [
            { id: 1, name:'Kamil'},
            { id: 2, name:'Michał'}
        ]
    }

    getFriends(){
        return this.items;
    }
}