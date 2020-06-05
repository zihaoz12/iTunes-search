import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../interface/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  constructor(
    private http: HttpClient
  ) { }

  getSongs(name):Observable<Album[]>{
    return this.http.get<Album[]>(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=50`)
  }
}
