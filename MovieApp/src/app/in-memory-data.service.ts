import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: "The Lighthouse", description: "Two lighthouse keepers try to maintain their sanity whilst living on a remote and mysterious New England island in the 1890s.", imageUrl: "lighthouse.jpg" },
      { id: 2, name: "Parasite", description: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.", imageUrl: "parasite.jpg" },
      { id: 3, name: "Suspiria", description: "A darkness swirls at the center of a world-renowned dance company, one that will engulf the artistic director, an ambitious young dancer, and a grieving psychotherapist. Some will succumb to the nightmare. Others will finally wake up.", imageUrl: "suspiria.jpg" },
      { id: 4, name: "2001: A Space Odyssey", description: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.", imageUrl: "a_space_odyssey.jpg" },
      { id: 5, name: "Spider-Man: Far from Home", description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.", imageUrl: "Spider-Man_Far_from_Home.jpg" }
    ];
    return { movies };
  }

  constructor() { }
}
