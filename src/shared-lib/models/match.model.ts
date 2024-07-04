import { Team } from "./club.model";
import { User } from "./user.model";

export interface Match {
  player1: string;
  team1: Team;
  player2: string;
  team2: Team;
}

