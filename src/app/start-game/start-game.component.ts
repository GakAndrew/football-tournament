import { routes } from './../app.routes';
import { ClubService } from './../../shared-lib/services/club.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface Rules {
  name: string;
  available: boolean;
}

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartGameComponent {
  rules: Rules[] = [
    {
      name: 'Rules of stars',
      available: true,
    },
    {
      name: 'Rules ...',
      available: false,
    },
    {
      name: 'Rules of .',
      available: false,
    }
  ]
  selectedRule = '';
  numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  countUsers = 0;
  countClubs = 0;

  constructor(private clubService: ClubService,
    private routes: Router,
  ) {

  }

  generateTeams() {
    this.clubService.countUsers = this.countUsers;
    this.clubService.rule = this.selectedRule;
    this.clubService.countClubs = this.countClubs;
    this.clubService.generateClubByRule();
    this.routes.navigate(['/info']);
  }
}
