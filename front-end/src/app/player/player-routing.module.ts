import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerListComponent } from './playerList/playerList.component';

const routes: Routes = [
  {path: 'player/create', component: PlayerFormComponent},
  {path: 'player', component: PlayerListComponent},
  {path: 'player/:id', component: PlayerFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
