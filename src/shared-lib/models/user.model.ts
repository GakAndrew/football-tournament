import { Team } from "./club.model";

export class User {
  name: string;
  teams: Team[];

  constructor(name: string) {
    this.name = name;
    this.teams = [];
  }
}