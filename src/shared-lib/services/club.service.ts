import { Injectable } from '@angular/core';
import { Team, leaguesData } from '../models/club.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  usedTeams = new Set<Team>();
  countClubs: number = 0;
  countUsers: number = 0;
  rule = '';
  clubs = leaguesData;
  users: User[] = [];


  constructor() {
  }

  getAllTeams(): Team[] {
    return this.clubs.flatMap(league => league.teams);
  }

  getAvailableTeams(): Team[] {
    const clubsFiltered = this.clubs.flatMap(league => league.teams).filter(team => !this.usedTeams.has(team))
    return clubsFiltered;
  };

  generateClubBuRule(): User[] {
    this.users = this.generateUsers();
    if (this.rule === 'Rules of stars') {
      this.assignTeamsToUsers(this.users);
    }

    return [];
  }

  swapTeam(user: User, oldTeam: Team, newTeam: Team): void {
    user.teams = user.teams.map(team => team === oldTeam ? newTeam : team);
    this.usedTeams.delete(oldTeam);
    this.usedTeams.add(newTeam);
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
      let assignedTeams = 0;

      const starRanges = [
        { max: 5, min: 4.5 },
        { max: 4.5, min: 4 },
        { max: 4, min: 0 }
      ];

      while (assignedTeams < this.countClubs) {
        let teamAssignedInThisRound = false;

        for (const starRange of starRanges) {
          if (assignedTeams >= this.countClubs) break;

          const availableLeagues = leaguesCopy.filter(league =>
            league.teams.some(team =>
              team.stars <= starRange.max &&
              team.stars > starRange.min &&
              !this.usedTeams.has(team)
            )
          );

          if (availableLeagues.length > 0) {
            const selectedLeagueIndex = Math.floor(Math.random() * availableLeagues.length);
            const selectedLeague = availableLeagues[selectedLeagueIndex];

            const availableTeams = selectedLeague.teams.filter(team =>
              team.stars <= starRange.max &&
              team.stars > starRange.min &&
              !this.usedTeams.has(team)
            );

            if (availableTeams.length > 0) {
              const selectedTeamIndex = Math.floor(Math.random() * availableTeams.length);
              const selectedTeam = availableTeams[selectedTeamIndex];

              user.teams.push(selectedTeam);
              this.usedTeams.add(selectedTeam);
              leaguesCopy = leaguesCopy.filter(l => l !== selectedLeague);
              assignedTeams++;
              teamAssignedInThisRound = true;
            }
          }
        }

        if (!teamAssignedInThisRound) break;
      }
    });
  }
}
