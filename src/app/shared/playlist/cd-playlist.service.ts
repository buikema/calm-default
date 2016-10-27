import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable ()

export class CdPlaylistService {
  private firebaseUrl: string = 'https://blistering-heat-2725.firebaseio.com/';
  private firebaseSelector: string = 'items';
  private firebaseJson: string = '.json';

  constructor(private http: Http) {}

  getDefaultFirebase() {
    return this.http.get(this.firebaseUrl + this.firebaseSelector + this.firebaseJson)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }

}
