import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../../interfaces/publication/publication';
import { environment } from '../../../environments/environment.mock';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PublicationsService {
    private publications: Publication[];
    private url = environment.service.publications.getPublications.url;

    constructor(readonly http: HttpClient) {
    }

    getPublications(publicationsFilter?: string): Publication[] {
        this.publications = [];
        this.http.get<Publication[]>(this.url)
            .pipe(
                map((publications) => this.applyFilter(publications, publicationsFilter))
            ).subscribe((publications) => {
            this.publications.push(...publications);
        });
        return this.publications;
    }

    send(publication: Publication) {
        this.publications = [];
        localStorage.setItem('publication', JSON.stringify(publication));
    }

    get(): Publication {
        if (localStorage.getItem('publication')) {
            return JSON.parse(localStorage.getItem('publication')) as Publication;
        } else {
            console.error('There is more than single publication in the storage.');
        }
    }

    private applyFilter(publications: Publication[], publicationsFilter: string) {
      if (publicationsFilter) {
        return publications.filter(pub => pub.category === publicationsFilter);
      }
      return publications;
    }
}
