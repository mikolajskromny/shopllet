import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { AddCardsComponent } from './add-cards/add-cards.component';
import { AddCardsModule } from './add-cards/add-cards.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    AddCardsModule
  ],
  exports: [AddCardsComponent],
  declarations: [FolderPage, AddCardsComponent]
})
export class FolderPageModule { }
