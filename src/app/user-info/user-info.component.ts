import { ClubService } from './../../shared-lib/services/club.service';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../shared-lib/models/user.model';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Team } from '../../shared-lib/models/club.model';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared-lib/components/dialog/dialog.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  users: User[] = [];

  get allTeams(): Team[] {
    return this.clubService.getAllTeams();
  }

  constructor(
    private clubService: ClubService,
    private routes: Router,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.users = this.clubService.users;
  }

  editName(user: User): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: user.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        user.name = result;
        this.cdr.markForCheck();
      }
    });

  }

  getAvailableTeams(team: Team): boolean {
    return this.clubService.usedTeams.has(team);
  }

  getClub(team: Team): Team {
    return this.allTeams.find((f) => f.name === team.name);
  }

  onTeamChange(user: User, teamIndex: number, newTeam: Team): void {
    const oldTeam = user.teams[teamIndex];
    this.clubService.swapTeam(user, oldTeam, newTeam);
    // this.loadAvailableTeams();
  }

  goBack() {
    this.routes.navigate(['']);
  }

  goNext() {
    this.routes.navigate(['start'])
  }
}
