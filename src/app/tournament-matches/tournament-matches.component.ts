import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Circle, ClubService } from '../../shared-lib/services/club.service';
import { User } from '../../shared-lib/models/user.model';
import { Match } from '../../shared-lib/models/match.model';
import { CommonModule } from '@angular/common';
import { MatchFilterPipe } from '../../shared-lib/pipes/matchFilter.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tournament-matches',
  standalone: true,
  imports: [CommonModule, MatchFilterPipe, MatTableModule, MatCardModule],
  templateUrl: './tournament-matches.component.html',
  styleUrl: './tournament-matches.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentMatchesComponent implements OnInit {
  users: User[] = [];
  matches: Match[] = [];
  rounds: Match[][];
  circles: Circle[] = [];
  displayedColumns: string[] = ['team1', 'team2'];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.circles = this.clubService.generateMatch(
      this.clubService.users,
      this.clubService.countClubs
    );
  }
}
