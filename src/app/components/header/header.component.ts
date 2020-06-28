import { Component, OnInit } from '@angular/core';
import { Page } from '../../interfaces/pages/page';
import { PageService } from '../../services/pages/page.service';

const MAX_SIZE = 576;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    private pages: Page[] = [];

    constructor(readonly pageService: PageService) {
    }

    ngOnInit() {
        this.pages = this.pageService.getPages();
    }

    calculateScreenSize(): boolean {
        const devWidth = window.screen.width;
        return devWidth > MAX_SIZE;
    }

}
