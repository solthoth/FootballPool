import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  TEAMS: Team[] = [
    { id: 1, division: 'NFC', location: 'Arizona', name: 'Cardinals' },
    { id: 2, division: 'NFC', location: 'Atlanta', name: 'Falcons' },
    { id: 3, division: 'NFC', location: 'Carolina', name: 'Panthers' },
    { id: 4, division: 'NFC', location: 'Chicago', name: 'Bears' },
    { id: 5, division: 'NFC', location: 'Dallas', name: 'Cowboys' },
    { id: 6, division: 'NFC', location: 'Detroit', name: 'Lions' },
    { id: 7, division: 'NFC', location: 'Green Bay', name: 'Packers' },
    { id: 8, division: 'NFC', location: 'Los Angeles', name: 'Rams' },
    { id: 9, division: 'NFC', location: 'Minnesota', name: 'Vikings' },
    { id: 10, division: 'NFC', location: 'New Orleans', name: 'Saints' },
    { id: 11, division: 'NFC', location: 'New York', name: 'Giants' },
    { id: 12, division: 'NFC', location: 'Philadelphia', name: 'Eagles' },
    { id: 13, division: 'NFC', location: 'San Franciisco', name: '49ers' },
    { id: 14, division: 'NFC', location: 'Seattle', name: 'Seahawks' },
    { id: 15, division: 'NFC', location: 'Tampa Bay', name: 'Buccaneers' },
    { id: 16, division: 'NFC', location: 'Washington', name: 'Football Team' },
    { id: 17, division: 'AFC', location: 'Baltimore', name: 'Ravens' },
    { id: 18, division: 'AFC', location: 'Buffalo', name: 'Bills' },
    { id: 19, division: 'AFC', location: 'Cincinnati', name: 'Bengals' },
    { id: 20, division: 'AFC', location: 'Cleveland', name: 'Browns' },
    { id: 21, division: 'AFC', location: 'Denver', name: 'Broncos' },
    { id: 22, division: 'AFC', location: 'Houston', name: 'Texans' },
    { id: 23, division: 'AFC', location: 'Indianapolis', name: 'Colts' },
    { id: 24, division: 'AFC', location: 'Jacksonville', name: 'Jaguars' },
    { id: 25, division: 'AFC', location: 'Kansas City', name: 'Chiefs' },
    { id: 26, division: 'AFC', location: 'Las Vegas', name: 'Raiders' },
    { id: 27, division: 'AFC', location: 'Los Angeles', name: 'Chargers' },
    { id: 28, division: 'AFC', location: 'Miami', name: 'Dolphins' },
    { id: 29, division: 'AFC', location: 'New England', name: 'Patriots' },
    { id: 30, division: 'AFC', location: 'New York', name: 'Jets' },
    { id: 31, division: 'AFC', location: 'Pittsburgh', name: 'Steelers' },
    { id: 32, division: 'AFC', location: 'Tennessee', name: 'Titans' },

  ];
  getTeams(): Team[] {
    return [];
  }
}
