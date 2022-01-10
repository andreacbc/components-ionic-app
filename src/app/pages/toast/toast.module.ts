import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ToastPageRoutingModule } from './toast-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { ToastPage } from './toast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToastPage]
})
export class ToastPageModule {}