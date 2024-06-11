import { ClubService } from './../../shared-lib/services/club.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../shared-lib/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  users: User[] = [];

  constructor(private clubService: ClubService, private routes: Router) {}

  ngOnInit(): void {
    this.users = this.clubService.users;
  }

  goBack() {
    this.routes.navigate(['']);
  }
}
