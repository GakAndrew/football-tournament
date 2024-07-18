import { Injectable } from '@angular/core';
import { Team, leaguesData } from '../models/club.model';
import { User } from '../models/user.model';

export interface Circle {
  matches: Match[];
}

interface Match {
  player1Name: string;
  team1: Team;
  player2Name: string;
  team2: Team;
}

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  usedTeams = new Set<Team>();
  countClubs: number = 0;
  countUsers: number = 0;
  rule = '';
  clubs = leaguesData;
  users: User[] = [];

  private calculateMatches(players: number): number {
    if (players < 2) {
      return 0;
    }
    return (players * (players - 1)) / 2;
  }

  getRandomNumber(n: number): number {
    return Math.floor(Math.random() * (n + 1));
  }

  generateMatch(users: User[], countClubs: number): Circle[] {
    let circle: Circle[] = new Array(countClubs)
      .fill(null)
      .map(() => ({ matches: [] }));

    for (let round = 0; round < countClubs; round++) {
      let matches: Match[] = [];
      let remainingUsers = [...users];

      for (let matchIndex = 0; matchIndex < 3; matchIndex++) {
        if (matchIndex === 0) {
          const user1 = remainingUsers[1];
          const user2 = remainingUsers[2];

          const team1 = user1.teams[round % user1.teams.length];
          const team2 = user2.teams[round % user2.teams.length];

          matches.push({
            player1Name: user1.name,
            team1: team1,
            player2Name: user2.name,
            team2: team2,
          });
        } else if (matchIndex === 1) {
          const user1 = remainingUsers[0];
          const user2 = remainingUsers[1];

          const team1 = user1.teams[round % user1.teams.length];
          const team2 = user2.teams[round % user2.teams.length];

          matches.push({
            player1Name: user1.name,
            team1: team1,
            player2Name: user2.name,
            team2: team2,
          });
        } else {
          const user1 = remainingUsers[0];
          const user2 = remainingUsers[2];

          const team1 = user1.teams[round % user1.teams.length];
          const team2 = user2.teams[round % user2.teams.length];

          matches.push({
            player1Name: user1.name,
            team1: team1,
            player2Name: user2.name,
            team2: team2,
          });
        }
      }

      circle[round].matches = matches.slice();
    }

    console.log(circle);
    return circle;
  }

  getAllTeams(): Team[] {
    return this.clubs.flatMap((league) => league.teams);
  }

  getAvailableTeams(): Team[] {
    const clubsFiltered = this.clubs
      .flatMap((league) => league.teams)
      .filter((team) => !this.usedTeams.has(team));
    return clubsFiltered;
  }

  generateClubBuRule(): User[] {
    this.users = this.generateUsers();
    if (this.rule === 'Rules of stars') {
      this.assignTeamsToUsers(this.users);
    }

    return [];
  }

  swapTeam(user: User, oldTeam: Team, newTeam: Team): void {
    user.teams = user.teams.map((team) => (team === oldTeam ? newTeam : team));
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
    users.forEach((user) => {
      let leaguesCopy = [...this.clubs];
      let assignedTeams = 0;

      const starRanges = [
        { max: 5, min: 4.5 },
        { max: 4.5, min: 4 },
        { max: 4, min: 0 },
      ];

      while (assignedTeams < this.countClubs) {
        let teamAssignedInThisRound = false;

        for (const starRange of starRanges) {
          if (assignedTeams >= this.countClubs) break;

          const availableLeagues = leaguesCopy.filter((league) =>
            league.teams.some(
              (team) =>
                team.stars <= starRange.max &&
                team.stars > starRange.min &&
                !this.usedTeams.has(team)
            )
          );

          if (availableLeagues.length > 0) {
            const selectedLeagueIndex = Math.floor(
              Math.random() * availableLeagues.length
            );
            const selectedLeague = availableLeagues[selectedLeagueIndex];

            const availableTeams = selectedLeague.teams.filter(
              (team) =>
                team.stars <= starRange.max &&
                team.stars > starRange.min &&
                !this.usedTeams.has(team)
            );

            if (availableTeams.length > 0) {
              const selectedTeamIndex = Math.floor(
                Math.random() * availableTeams.length
              );
              const selectedTeam = availableTeams[selectedTeamIndex];

              user.teams.push(selectedTeam);
              this.usedTeams.add(selectedTeam);
              leaguesCopy = leaguesCopy.filter((l) => l !== selectedLeague);
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
