import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../interfaces/publication/publication';
import { Router } from '@angular/router';
import { PublicationsService } from '../../services/publications/publications.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {

  @Input() private  readonly publication: Publication;
  @Input() private  readonly index: number;

  constructor(readonly router: Router, readonly publicationService: PublicationsService) { }

  ngOnInit() {}

  sendAndNavigatePublication(publication: Publication) {
    this.publicationService.send(publication);
    this.router.navigate(['/publication']);
  }
}
