import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tournament-matches',
  standalone: true,
  imports: [],
  templateUrl: './tournament-matches.component.html',
  styleUrl: './tournament-matches.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentMatchesComponent {

}
