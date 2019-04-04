import { Component } from '@angular/core';
import { SearchArtistService } from './search-artist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fa-music-store';
  listArtist = [];
  listTopTrack = [];
  inputString;
  isNull = false;
  iimagess = '../assets/not-found.png';
  constructor(private artistService: SearchArtistService) {}

  handleInput(key) {
    this.artistService.getArtist(key).subscribe(data => {
      this.listArtist = data.artists.items;
      console.log(this.listArtist);
    });
    this.listArtist = [];
    // tslint:disable-next-line:no-debugger
    this.listTopTrack = [];
  }
  handleClick(id) {
    const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`;
    const name = 'VN';
    this.artistService.getTopTrackById(url, name).subscribe(data => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.tracks.length; i++) {
        this.listTopTrack.push(data.tracks[i]);
      }
      if (this.listTopTrack.length !== 0) {
        this.isNull = true;
      } else {
        this.isNull = false;
      }
      // console.log(this.listTopTrack);
    });
    this.listTopTrack = [];
  }
  resetValue(e) {
    if (e === '') {
      this.listArtist = [];
      this.listTopTrack = [];
    } else {
      this.artistService.getArtist(e).subscribe(data => {
        this.listArtist = data.artists.items;
        // console.log(this.listArtist);
        if (this.listTopTrack.length !== 0) {
          this.isNull = true;
        } else {
          this.isNull = false;
        }
      });
      this.listArtist = [];
      this.listTopTrack = [];
    }
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {}
}
