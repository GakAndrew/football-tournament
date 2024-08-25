import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClubService } from '../../shared-lib/services/club.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsSelectedGuard implements CanActivate {
  constructor(private clubService: ClubService, private router: Router) {}

  canActivate(): boolean {
    if (this.clubService.users.length === 0 || !this.clubService.countClubs) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
