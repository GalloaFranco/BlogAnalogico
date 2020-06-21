import { Component, OnInit } from '@angular/core';
import { Page } from '../../interfaces/pages/page';
import { PageService } from '../../services/pages/page.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    private pages: Page[] = [];
    private readonly title = 'Menu';

    constructor(readonly pageService: PageService) {
    }

    ngOnInit() {
        this.pages = this.pageService.getPages();
    }

}
