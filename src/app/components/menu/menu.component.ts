import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../../interfaces/pages/page';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    @Input() private pages: Page[] = [];
    private readonly title = 'Menu';

    constructor() {}

    ngOnInit() {
    }

}
