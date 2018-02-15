import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

import {Album} from '../app/dashboard/album-interface';

@Injectable ()
export class AlbumService {

  constructor(private http: HttpClient) {}

  findAlbum(): Observable<Album[]>{
    return this.http.get('https://mymymy-4eea8.firebaseio.com/' ).map(res=><Album[]>res);
  }
  findAlbumById(id:number): Observable<Album>{
    return this.http.get('https://mymymy-4eea8.firebaseio.com/' + id).map(res=><Album>res);
  }
}
