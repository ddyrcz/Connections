import { Component } from '@angular/core';

@Component({
    selector: 'list',
    moduleId: module.id,
    templateUrl: 'index.html',
    styleUrls: [
        'style.css'
    ]
})

export class ListComponent {
    items = [
        { id: 1, name: 'Dawid' },
        { id: 2, name: 'Kamil' },
        { id: 3, name: 'Jarek' },
        { id: 4, name: 'Michał' }         
    ];
}