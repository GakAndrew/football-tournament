import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




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

  generateTeams() {

  }
}
