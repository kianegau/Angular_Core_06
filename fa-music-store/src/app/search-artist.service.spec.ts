import { TestBed } from '@angular/core/testing';

import { SearchArtistService } from './search-artist.service';

describe('SearchArtistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchArtistService = TestBed.get(SearchArtistService);
    expect(service).toBeTruthy();
  });
});
