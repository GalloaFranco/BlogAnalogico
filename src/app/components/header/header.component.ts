import { Component, OnInit } from '@angular/core';

const MAX_SIZE = 576;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pages: any[] = [
    {title: 'Blog'},
    {title: 'Nosotros'},
    {title: 'Tienda'}
  ];

  constructor() { }

  ngOnInit() {}

  calculateScreenSize(): boolean {
    const devWidth = window.screen.width;
    return devWidth > MAX_SIZE;
  }

}
