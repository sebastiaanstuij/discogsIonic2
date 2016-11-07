import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { SearchResult } from '../models/searchResult';

@Injectable()
export class DiscogsAPI {
  discogsApiUrl = 'https://api.discogs.com/';

  constructor(public http: Http) { }

  // Search for github users
  search(searchParam: string): Observable<any[]> {
    return this.http.get(`${this.discogsApiUrl}/database/search?q=${searchParam}`)
      .map(res => <any[]>(res.json().items))
  }

}
