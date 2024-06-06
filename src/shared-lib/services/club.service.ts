import { Injectable } from '@angular/core';
import { Team, leaguesData } from '../models/club.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  countUsers: number = 0;
  rule = '';
  clubs = leaguesData;
  users: User[] = [];


  constructor() {
  }

  generateClubBuRule(): User[] {
    this.users = this.generateUsers();
    if (this.rule === 'Rules of stars') {
      debugger;
      this.assignTeamsToUsers(this.users);
    }

    console.log(this.users);
    return [];
  }

  private generateUsers(): User[] {
    const users: User[] = [];
    for (let i = 1; i <= this.countUsers; i++) {
      const user = new User(`p${i}`);
      users.push(user);
    }
    return users;
  }

  private assignTeamsToUsers(users: User[]): void {
    users.forEach(user => {
      let leaguesCopy = [...this.clubs];

      let starRanges = [{ max: 5, min: 4.5 }, { max: 4.5, min: 4 }, { max: 4, min: 0 }];
      starRanges.forEach(starRange => {
        const availableLeagues = leaguesCopy.filter(league =>
          league.teams.some(team => team.stars <= starRange.max && team.stars > starRange.min)
        );

        if (availableLeagues.length > 0) {
          const selectedLeagueIndex = Math.floor(Math.random() * availableLeagues.length);
          const selectedLeague = availableLeagues[selectedLeagueIndex];

          const availableTeams = selectedLeague.teams.filter(team =>
            team.stars <= starRange.max && team.stars > starRange.min
          );

          const selectedTeamIndex = Math.floor(Math.random() * availableTeams.length);
          const selectedTeam = availableTeams[selectedTeamIndex];

          user.teams.push(selectedTeam);
          leaguesCopy = leaguesCopy.filter(l => l !== selectedLeague);
        } else {
          // Если нет доступных лиг, можно выбрать команду из других диапазонов
        }
      });
    });
  }
}
