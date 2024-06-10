import { routes } from './../app.routes';
import { ClubService } from './../../shared-lib/services/club.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartGameComponent {
  rules = ['Rules of stars', 'Rules ...', 'Rules of .'];
  selectedRule = '';
  numberOfUsers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  countUsers = 0;

  constructor(private clubService: ClubService,
    private routes: Router,
  ) {

  }

  generateTeams() {
    this.clubService.countUsers = this.countUsers;
    this.clubService.rule = this.selectedRule;
    this.clubService.generateClubBuRule();
    this.routes.navigate(['/info']);
  }
}
