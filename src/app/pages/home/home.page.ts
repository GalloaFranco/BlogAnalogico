import { Component, OnInit } from '@angular/core';
import { Publication } from '../../interfaces/publication/publication';
import { PublicationsService } from '../../services/publications/publications.service';
import { PublicationFilter } from '../../utils/publicationFilter';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    private publications: Publication[];

    constructor(readonly publicationsService: PublicationsService) {
    }

    ngOnInit(): void {
        this.publications = this.publicationsService.getPublications(PublicationFilter.IMPORTANT);
    }
}
