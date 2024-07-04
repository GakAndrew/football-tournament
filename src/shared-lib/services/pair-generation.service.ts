import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PairGenerationService {
  generate(countUsers: number) {
    this.getRandom(countUsers);
  }

  private getRandom(max) {
    return Math.floor(Math.random() * max);
  }
}
