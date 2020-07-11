import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../../interfaces/publication/publication';
import { environment } from '../../../environments/environment.mock';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private publications: Publication[];
  private url = environment.service.publications.getPublications.url;

  constructor(readonly http: HttpClient) { }

  getPublications(): Publication[] {
    this.publications = [];
    this.http.get<Publication[]>(this.url).subscribe((publications) => {
      this.publications.push(...publications);
    });
    return this.publications;
  }
}
