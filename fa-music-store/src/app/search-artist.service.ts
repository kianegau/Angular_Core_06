import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchArtistService {
  constructor(private http: HttpClient) {}
  private url = 'https://api.spotify.com/v1/search';
  // tslint:disable-next-line:variable-name
  private _type = 'artist';
  getArtist(name: string): Observable<any> {
    return this.http.get(this.url, {
      params: {
        q: name,
        type: this._type
      }
    });
  }
  getTopTrackById(url, conutryName): Observable<any> {
    return this.http.get(url, {
      params: {
        country: conutryName
      }
    });
  }
}
