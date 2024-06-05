export enum League {
  PremierLeague = "Premier League",
  LaLiga = "La Liga",
  Bundesliga = "Bundesliga",
  SerieA = "Serie A",
  Ligue1 = "Ligue 1"
}

export interface Team {
  name: string;
  logo: string;
  league: League;
  country: string;
  flag: string;
  stars: number;
  attack: number;
  midfield: number;
  defense: number;
}

export const teams: Team[] = [
  {
    name: "Manchester City",
    logo: "https://cdn.sofifa.net/meta/team/9/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 5,
    attack: 86,
    midfield: 87,
    defense: 84
  },
  {
    name: "Arsenal",
    logo: "https://cdn.sofifa.net/meta/team/19/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 5,
    attack: 83,
    midfield: 85,
    defense: 81
  },
  {
    name: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 5,
    attack: 84,
    midfield: 81,
    defense: 84
  },
  {
    name: "Aston Villa",
    logo: "https://cdn.sofifa.net/meta/team/15/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4.5,
    attack: 83,
    midfield: 79,
    defense: 78
  },
  {
    name: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4,
    attack: 78,
    midfield: 79,
    defense: 81
  },
  {
    name: "Tottenham Hotspur",
    logo: "https://cdn.sofifa.net/meta/team/6/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4,
    attack: 83,
    midfield: 80,
    defense: 80
  },
  {
    name: "Chelsea",
    logo: "https://cdn.sofifa.net/meta/team/18/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 5,
    attack: 77,
    midfield: 78,
    defense: 79
  },
  {
    name: "Newcastle United",
    logo: "https://cdn.sofifa.net/meta/team/20/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 5,
    attack: 80,
    midfield: 76,
    defense: 73
  },
  {
    name: "West Ham United",
    logo: "https://cdn.sofifa.net/meta/team/1/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4,
    attack: 79,
    midfield: 79,
    defense: 78
  },
  {
    name: "Crystal Palace",
    logo: "https://cdn.sofifa.net/meta/team/51/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4,
    attack: 75,
    midfield: 76,
    defense: 75
  },
  {
    name: "Nottingham Forest",
    logo: "https://cdn.sofifa.net/meta/team/63/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 3,
    attack: 75,
    midfield: 76,
    defense: 74
  },
  {
    name: "Brighton & Hove Albion",
    logo: "https://cdn.sofifa.net/meta/team/78/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4,
    attack: 75,
    midfield: 74,
    defense: 76
  },
  {
    name: "Wolverhampton Wanderers",
    logo: "https://cdn.sofifa.net/meta/team/29/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 3,
    attack: 78,
    midfield: 77,
    defense: 76
  },
  {
    name: "Brentford",
    logo: "https://cdn.sofifa.net/meta/team/236/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4,
    attack: 77,
    midfield: 75,
    defense: 76
  },
  {
    name: "Fulham",
    logo: "https://cdn.sofifa.net/meta/team/11/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 5,
    attack: 72,
    midfield: 77,
    defense: 76
  },
  {
    name: "Everton",
    logo: "https://cdn.sofifa.net/meta/team/13/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 3,
    attack: 77,
    midfield: 76,
    defense: 75
  },
  {
    name: "AFC Bournemouth",
    logo: "https://cdn.sofifa.net/meta/team/52/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4,
    attack: 79,
    midfield: 75,
    defense: 74
  },
  {
    name: "Burnley",
    logo: "https://cdn.sofifa.net/meta/team/27/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 3,
    attack: 72,
    midfield: 74,
    defense: 73
  },
  {
    name: "Sheffield United",
    logo: "https://cdn.sofifa.net/meta/team/21/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 4,
    attack: 73,
    midfield: 71,
    defense: 71
  },
  {
    name: "Luton Town",
    logo: "https://cdn.sofifa.net/meta/team/115/60.png",
    league: League.PremierLeague,
    country: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    stars: 5,
    attack: 71,
    midfield: 72,
    defense: 71
  }
];

