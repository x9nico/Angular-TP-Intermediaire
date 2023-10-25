import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerListComponent } from './playerList/playerList.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerRoutingModule } from './player-routing.module';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
    SharedModule,
    

  ],
  exports: [
    PlayerListComponent,
    PlayerFormComponent,
  ]
})
export class PlayerModule { }
