import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { PlayerModule } from './player/player.module';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)},
  { path: 'player', loadChildren: () => import('./player/player.module').then(m => m.PlayerModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule, PlayerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }