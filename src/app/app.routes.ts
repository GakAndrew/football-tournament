import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./start-game/start-game.component').then(
        (m) => m.StartGameComponent
      ),
  },
  {
    path: 'info',
    loadComponent: () =>
      import('./user-info/user-info.component').then(
        (m) => m.UserInfoComponent
      ),
  },
  {
    path: 'start',
    loadComponent:() =>
      import('./tournament-matches/tournament-matches.component').then(
        (m) => m.TournamentMatchesComponent
      ),
  },
];
