import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications/publications.service';
import { Publication } from '../../interfaces/publication/publication';

@Component({
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {
  private publication: Publication;

  constructor(readonly publicationService: PublicationsService) { }

  ngOnInit() {
    this.publication = this.publicationService.get();
    console.log(this.publication);
  }

}
