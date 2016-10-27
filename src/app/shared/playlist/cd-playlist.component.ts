import {Component, OnInit} from '@angular/core';
import {CdPlaylistService} from "./cd-playlist.service";

@Component({
  selector: 'cd-playlist',
  templateUrl: './cd-playlist.component.html',
  styleUrls: ['./cd-playlist.component.css'],
  providers: [CdPlaylistService]
})
export class CdPlaylistComponent implements OnInit {
  private videos: any[] = [];

  constructor(private playlistService: CdPlaylistService) {}

  ngOnInit() {
    this.playlistService.getDefaultFirebase()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.videos = myArray;
          console.log(this.videos);
        },
        error => console.log(error)
      );
  }
}
