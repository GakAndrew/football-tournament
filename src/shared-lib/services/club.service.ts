import { Injectable } from '@angular/core';
import { teams } from '../models/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  rule = '';
  clubs = teams;


  constructor() { }

  // generateClubBuRule(): IClub[] {


  // }
}
