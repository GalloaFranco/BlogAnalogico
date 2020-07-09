import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../../interfaces/publication/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private publications: Publication[];

  constructor(readonly http: HttpClient) { }

  getPublications(): Publication[] {
    this.publications = [];
    this.http.get<Publication[]>('/assets/data/publicationsMock.json').subscribe((publications) => {
      this.publications.push(...publications);
    });
    return this.publications;
  }
}
