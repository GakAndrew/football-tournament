import { Pipe, PipeTransform } from '@angular/core';
import { Match } from '../models/match.model';

@Pipe({
  name: 'matchFilter',
  standalone: true
})
export class MatchFilterPipe implements PipeTransform {
  transform(matches: Match[], round: number): Match[] {
    return matches.filter(match => match.player1 !== null);
  }
}
