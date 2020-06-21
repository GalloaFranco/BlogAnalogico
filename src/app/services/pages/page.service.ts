import { Injectable } from '@angular/core';
import { Page } from '../../interfaces/pages/page';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PageService {
    private pages: Page[] = [];

    constructor(readonly http: HttpClient) {
    }

    getPages(): Page[] {
        this.pages = [];
        this.http.get<Page[]>('/assets/data/pagesMock.json').subscribe((result) => {
           this.pages.push(...result);
        });
        return this.pages;
    }
}
