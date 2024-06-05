import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'start-game',
    loadComponent: () => import('./start-game/start-game.component').then(m => m.StartGameComponent)
  }
];
