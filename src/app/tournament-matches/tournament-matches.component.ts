import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClubService } from '../../shared-lib/services/club.service';
import { User } from '../../shared-lib/models/user.model';
import { Match } from '../../shared-lib/models/match.model';
import { CommonModule } from '@angular/common';
import { MatchFilterPipe } from '../../shared-lib/pipes/matchFilter.pipe';

@Component({
  selector: 'app-tournament-matches',
  standalone: true,
  imports: [CommonModule, MatchFilterPipe],
  templateUrl: './tournament-matches.component.html',
  styleUrl: './tournament-matches.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentMatchesComponent implements OnInit {
  users: User[] = [];
  matches: Match[] = [];
  rounds: Match[][];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
  }
}
