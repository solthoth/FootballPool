import { CompetingTeam } from "./competingTeam";

export interface Game {
  homeTeam: CompetingTeam;
  awayTeam: CompetingTeam;
  startTime: Date;
}
