import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../interfaces/publication/publication';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {

  @Input() private  readonly publication: Publication;
  @Input() private  readonly index: number;
  constructor() { }

  ngOnInit() {}

}
