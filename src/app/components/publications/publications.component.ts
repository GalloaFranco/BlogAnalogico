import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../interfaces/publication/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  @Input() private readonly publications: Publication[];
  constructor() { }

  ngOnInit() {}

}
