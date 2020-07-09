import { Component, OnInit } from '@angular/core';
import { Publication } from '../../interfaces/publication/publication';
import { PublicationsService } from '../../services/publications/publications.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  private publications: Publication[];

  constructor(readonly publicationsService: PublicationsService) { }

  ngOnInit() {
    this.publications = this.publicationsService.getPublications();
  }

}
