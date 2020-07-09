import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PublicationComponent } from './publication/publication.component';
import { PublicationsComponent } from './publications/publications.component';


@NgModule({
  declarations: [MenuComponent, HeaderComponent, PublicationComponent, PublicationsComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [MenuComponent, HeaderComponent, PublicationsComponent]
})
export class ComponentModule { }
