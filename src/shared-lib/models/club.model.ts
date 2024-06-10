export type League = 'Premier League' | 'LaLiga' | 'Bundesliga' | 'Serie A' | 'Ligue 1';

export interface Team {
  name?: string;
  logo?: string;
  league?: League;
  country?: string;
  flag?: string;
  stars?: number;
  attack?: number;
  midfield?: number;
  defense?: number;
}

export interface LeagueTeams {
  name: League;
  country: string;
  teams: Team[];
}

// export const leaguesData: LeagueTeams[] = [
//   {
//     "name": "Premier League",
//     "country": "England",
//     "teams": [
//       {
//         "name": "Manchester City",
//         "logo": "https://cdn.sofifa.net/meta/team/9/60.png",
//         "stars": 5,
//         "attack": 87,
//         "midfield": 86,
//         "defense": 83
//       },
//       {
//         "name": "Liverpool",
//         "logo": "https://cdn.sofifa.net/meta/team/6/60.png",
//         "stars": 5,
//         "attack": 84,
//         "midfield": 82,
//         "defense": 84
//       },
//       {
//         "name": "Arsenal",
//         "logo": "https://cdn.sofifa.net/meta/team/1/60.png",
//         "stars": 5,
//         "attack": 82,
//         "midfield": 84,
//         "defense": 81
//       },
//       {
//         "name": "Manchester United",
//         "logo": "https://cdn.sofifa.net/meta/team/11/60.png",
//         "stars": 82,
//         "attack": 82,
//         "midfield": 83,
//         "defense": 80
//       },
//       {
//         "name": "Tottenham Hotspur",
//         "logo": "https://cdn.sofifa.net/meta/team/18/60.png",
//         "stars": 81,
//         "attack": 83,
//         "midfield": 80,
//         "defense": 80
//       }
//     ]
//   },
//   {
//     "name": "LaLiga",
//     "country": "Spain",
//     "teams": [
//       {
//         "name": "Real Madrid",
//         "logo": "https://cdn.sofifa.net/meta/team/19/60.png",
//         "stars": 85,
//         "attack": 85,
//         "midfield": 85,
//         "defense": 83
//       },
//       {
//         "name": "FC Barcelona",
//         "logo": "https://cdn.sofifa.net/meta/team/8/60.png",
//         "stars": 84,
//         "attack": 84,
//         "midfield": 84,
//         "defense": 83
//       },
//       {
//         "name": "Atlético de Madrid",
//         "logo": "https://cdn.sofifa.net/meta/team/8/60.png",
//         "stars": 83,
//         "attack": 85,
//         "midfield": 82,
//         "defense": 81
//       },
//       {
//         "name": "Sevilla FC",
//         "logo": "https://cdn.sofifa.net/meta/team/15/60.png",
//         "stars": 81,
//         "attack": 82,
//         "midfield": 81,
//         "defense": 80
//       },
//       {
//         "name": "Real Sociedad",
//         "logo": "https://cdn.sofifa.net/meta/team/16/60.png",
//         "stars": 81,
//         "attack": 81,
//         "midfield": 80,
//         "defense": 80
//       }
//     ]
//   },
//   {
//     "name": "Bundesliga",
//     "country": "Germany",
//     "teams": [
//       {
//         "name": "FC Bayern München",
//         "logo": "https://cdn.sofifa.net/meta/team/21/60.png",
//         "stars": 85,
//         "attack": 86,
//         "midfield": 85,
//         "defense": 83
//       },
//       {
//         "name": "Borussia Dortmund",
//         "logo": "https://cdn.sofifa.net/meta/team/22/60.png",
//         "stars": 82,
//         "attack": 84,
//         "midfield": 82,
//         "defense": 80
//       },
//       {
//         "name": "RB Leipzig",
//         "logo": "https://cdn.sofifa.net/meta/team/23/60.png",
//         "stars": 81,
//         "attack": 82,
//         "midfield": 81,
//         "defense": 80
//       },
//       {
//         "name": "Bayer 04 Leverkusen",
//         "logo": "https://cdn.sofifa.net/meta/team/24/60.png",
//         "stars": 80,
//         "attack": 81,
//         "midfield": 80,
//         "defense": 79
//       },
//       {
//         "name": "Eintracht Frankfurt",
//         "logo": "https://cdn.sofifa.net/meta/team/25/60.png",
//         "stars": 79,
//         "attack": 80,
//         "midfield": 79,
//         "defense": 78
//       }
//     ]
//   },
//   {
//     "name": "Serie A",
//     "country": "Italy",
//     "teams": [
//       {
//         "name": "Inter",
//         "logo": "https://cdn.sofifa.net/meta/team/10/60.png",
//         "stars": 84,
//         "attack": 85,
//         "midfield": 84,
//         "defense": 83
//       },
//       {
//         "name": "Juventus",
//         "logo": "https://cdn.sofifa.net/meta/team/13/60.png",
//         "stars": 84,
//         "attack": 84,
//         "midfield": 83,
//         "defense": 83
//       },
//       {
//         "name": "AC Milan",
//         "logo": "https://cdn.sofifa.net/meta/team/14/60.png",
//         "stars": 82,
//         "attack": 83,
//         "midfield": 82,
//         "defense": 80
//       },
//       {
//         "name": "Napoli",
//         "logo": "https://cdn.sofifa.net/meta/team/15/60.png",
//         "stars": 82,
//         "attack": 83,
//         "midfield": 82,
//         "defense": 80
//       },
//       {
//         "name": "AS Roma",
//         "logo": "https://cdn.sofifa.net/meta/team/16/60.png",
//         "stars": 81,
//         "attack": 82,
//         "midfield": 81,
//         "defense": 80
//       }
//     ]
//   },
//   {
//     "name": "Ligue 1",
//     "country": "France",
//     "teams": [
//       {
//         "name": "Paris Saint-Germain",
//         "logo": "https://cdn.sofifa.net/meta/team/18/60.png",
//         "stars": 85,
//         "attack": 86,
//         "midfield": 85,
//         "defense": 83
//       },
//       {
//         "name": "Olympique Lyonnais",
//         "logo": "https://cdn.sofifa.net/meta/team/17/60.png",
//         "stars": 81,
//         "attack": 82,
//         "midfield": 81,
//         "defense": 80
//       },
//       {
//         "name": "Olympique de Marseille",
//         "logo": "https://cdn.sofifa.net/meta/team/19/60.png",
//         "stars": 80,
//         "attack": 81,
//         "midfield": 80,
//         "defense": 79
//       },
//       {
//         "name": "AS Monaco",
//         "logo": "https://cdn.sofifa.net/meta/team/20/60.png",
//         "stars": 80,
//         "attack": 81,
//         "midfield": 80,
//         "defense": 79
//       },
//       {
//         "name": "Lille OSC",
//         "logo": "https://cdn.sofifa.net/meta/team/21/60.png",
//         "stars": 79,
//         "attack": 80,
//         "midfield": 79,
//         "defense": 78
//       }
//     ]
//   }
// ]
export const leaguesData: LeagueTeams[] = [
  {
    "name": "Premier League",
    "country": "England",
    "teams": [
      {
        "name": "Manchester City",
        "logo": "https://cdn.sofifa.net/meta/team/9/60.png",
        "league": "Premier League",
        "country": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "stars": 5,
        "attack": 87,
        "midfield": 86,
        "defense": 83
      },
      {
        "name": "AndrewG",
        "logo": "https://cdn.sofifa.net/meta/team/9/60.png",
        "league": "Premier League",
        "country": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "stars": 5,
        "attack": 87,
        "midfield": 86,
        "defense": 83
      },
      {
        "name": "RomanG",
        "logo": "https://cdn.sofifa.net/meta/team/9/60.png",
        "league": "Premier League",
        "country": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "stars": 5,
        "attack": 87,
        "midfield": 86,
        "defense": 83
      },
      {
        "name": "OlegG",
        "logo": "https://cdn.sofifa.net/meta/team/9/60.png",
        "league": "Premier League",
        "country": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "stars": 5,
        "attack": 87,
        "midfield": 86,
        "defense": 83
      },
      {
        "name": "Liverpool",
        "logo": "https://cdn.sofifa.net/meta/team/6/60.png",
        "league": "Premier League",
        "country": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "stars": 4.5,
        "attack": 84,
        "midfield": 82,
        "defense": 84
      },
      {
        "name": "Arsenal",
        "logo": "https://cdn.sofifa.net/meta/team/1/60.png",
        "league": "Premier League",
        "country": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "stars": 4.5,
        "attack": 82,
        "midfield": 84,
        "defense": 81
      },
      {
        "name": "Manchester United",
        "logo": "https://cdn.sofifa.net/meta/team/11/60.png",
        "league": "Premier League",
        "country": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "stars": 4.5,
        "attack": 82,
        "midfield": 83,
        "defense": 80
      },
      {
        "name": "Tottenham Hotspur",
        "logo": "https://cdn.sofifa.net/meta/team/18/60.png",
        "league": "Premier League",
        "country": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "stars": 4,
        "attack": 83,
        "midfield": 80,
        "defense": 80
      }
    ]
  },
  {
    "name": "LaLiga",
    "country": "Spain",
    "teams": [
      {
        "name": "Real Madrid",
        "logo": "https://cdn.sofifa.net/meta/team/243/60.png",
        "league": "LaLiga",
        "country": "Spain",
        "flag": "https://cdn.sofifa.net/flags/es.png",
        "stars": 5,
        "attack": 85,
        "midfield": 85,
        "defense": 83
      },
      {
        "name": "FC Barcelona",
        "logo": "https://cdn.sofifa.net/meta/team/241/60.png",
        "league": "LaLiga",
        "country": "Spain",
        "flag": "https://cdn.sofifa.net/flags/es.png",
        "stars": 4.5,
        "attack": 84,
        "midfield": 84,
        "defense": 83
      },
      {
        "name": "Atlético de Madrid",
        "logo": "https://cdn.sofifa.net/meta/team/240/60.png",
        "league": "LaLiga",
        "country": "Spain",
        "flag": "https://cdn.sofifa.net/flags/es.png",
        "stars": 4.5,
        "attack": 85,
        "midfield": 82,
        "defense": 81
      },
      {
        "name": "Sevilla FC",
        "logo": "https://cdn.sofifa.net/meta/team/481/60.png",
        "league": "LaLiga",
        "country": "Spain",
        "flag": "https://cdn.sofifa.net/flags/es.png",
        "stars": 4,
        "attack": 82,
        "midfield": 81,
        "defense": 80
      },
      {
        "name": "Sevilla FC2",
        "logo": "https://cdn.sofifa.net/meta/team/481/60.png",
        "league": "LaLiga",
        "country": "Spain",
        "flag": "https://cdn.sofifa.net/flags/es.png",
        "stars": 4,
        "attack": 82,
        "midfield": 81,
        "defense": 80
      },
      {
        "name": "Sevilla FC3",
        "logo": "https://cdn.sofifa.net/meta/team/481/60.png",
        "league": "LaLiga",
        "country": "Spain",
        "flag": "https://cdn.sofifa.net/flags/es.png",
        "stars": 4,
        "attack": 82,
        "midfield": 81,
        "defense": 80
      },
      {
        "name": "Real Sociedad",
        "logo": "https://cdn.sofifa.net/meta/team/457/60.png",
        "league": "LaLiga",
        "country": "Spain",
        "flag": "https://cdn.sofifa.net/flags/es.png",
        "stars": 4,
        "attack": 81,
        "midfield": 80,
        "defense": 80
      }
    ]
  },
  {
    "name": "Bundesliga",
    "country": "Germany",
    "teams": [
      {
        "name": "FC Bayern München",
        "logo": "https://cdn.sofifa.net/meta/team/21/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 5,
        "attack": 86,
        "midfield": 85,
        "defense": 83
      },
      {
        "name": "FC Bayern München1",
        "logo": "https://cdn.sofifa.net/meta/team/21/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 5,
        "attack": 86,
        "midfield": 85,
        "defense": 83
      },
      {
        "name": "FC Bayern München2",
        "logo": "https://cdn.sofifa.net/meta/team/21/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4.5,
        "attack": 86,
        "midfield": 85,
        "defense": 83
      },
      {
        "name": "FC Bayern München3",
        "logo": "https://cdn.sofifa.net/meta/team/21/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4.5,
        "attack": 86,
        "midfield": 85,
        "defense": 83
      },
      {
        "name": "Borussia Dortmund",
        "logo": "https://cdn.sofifa.net/meta/team/22/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4.5,
        "attack": 84,
        "midfield": 82,
        "defense": 80
      },
      {
        "name": "asdgasdgsadgasdgsadg",
        "logo": "https://cdn.sofifa.net/meta/team/22/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4.5,
        "attack": 84,
        "midfield": 82,
        "defense": 80
      },
      {
        "name": "clubs gay",
        "logo": "https://cdn.sofifa.net/meta/team/22/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4,
        "attack": 84,
        "midfield": 82,
        "defense": 80
      },
      {
        "name": "pro gayClub",
        "logo": "https://cdn.sofifa.net/meta/team/22/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4,
        "attack": 84,
        "midfield": 82,
        "defense": 80
      },
      {
        "name": "RB Leipzig",
        "logo": "https://cdn.sofifa.net/meta/team/112172/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4,
        "attack": 82,
        "midfield": 81,
        "defense": 80
      },
      {
        "name": "Bayer 04 Leverkusen",
        "logo": "https://cdn.sofifa.net/meta/team/27/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4,
        "attack": 81,
        "midfield": 80,
        "defense": 79
      },
      {
        "name": "Eintracht Frankfurt",
        "logo": "https://cdn.sofifa.net/meta/team/1824/60.png",
        "league": "Bundesliga",
        "country": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "stars": 4,
        "attack": 80,
        "midfield": 79,
        "defense": 78
      }
    ]
  },
  {
    "name": "Serie A",
    "country": "Italy",
    "teams": [
      {
        "name": "Inter",
        "logo": "https://cdn.sofifa.net/meta/team/44/60.png",
        "league": "Serie A",
        "country": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "stars": 5,
        "attack": 85,
        "midfield": 84,
        "defense": 83
      },
      {
        "name": "Juventus",
        "logo": "https://cdn.sofifa.net/meta/team/45/60.png",
        "league": "Serie A",
        "country": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "stars": 4.5,
        "attack": 84,
        "midfield": 83,
        "defense": 83
      },
      {
        "name": "JuventusAAA",
        "logo": "https://cdn.sofifa.net/meta/team/45/60.png",
        "league": "Serie A",
        "country": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "stars": 5,
        "attack": 84,
        "midfield": 83,
        "defense": 83
      },
      {
        "name": "JuventusBBB",
        "logo": "https://cdn.sofifa.net/meta/team/45/60.png",
        "league": "Serie A",
        "country": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "stars": 5,
        "attack": 84,
        "midfield": 83,
        "defense": 83
      },
      {
        "name": "AC Milan",
        "logo": "https://cdn.sofifa.net/meta/team/47/60.png",
        "league": "Serie A",
        "country": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "stars": 4.5,
        "attack": 83,
        "midfield": 82,
        "defense": 80
      },
      {
        "name": "Napoli",
        "logo": "https://cdn.sofifa.net/meta/team/48/60.png",
        "league": "Serie A",
        "country": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "stars": 4,
        "attack": 82,
        "midfield": 80,
        "defense": 78
      },
      {
        "name": "Napoli2",
        "logo": "https://cdn.sofifa.net/meta/team/48/60.png",
        "league": "Serie A",
        "country": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "stars": 4,
        "attack": 82,
        "midfield": 80,
        "defense": 78
      },
      {
        "name": "Napoli3",
        "logo": "https://cdn.sofifa.net/meta/team/48/60.png",
        "league": "Serie A",
        "country": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "stars": 4,
        "attack": 82,
        "midfield": 80,
        "defense": 78
      }
    ]
  }
];
