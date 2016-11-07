import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchResult } from '../../models/searchResult';

import { UserDetailsPage } from '../user-details/user-details';

import {  DiscogsAPI } from '../../providers/discogsAPI';


@Component({
  selector: 'page-users',
  templateUrl: 'search.html'
})
export class SearchPage {
  searchResults: any[];

  constructor(public navCtrl: NavController, private discogsAPI: DiscogsAPI) {
    // discogsAPI.load().subscribe(users => {
    //   this.users = users;
    // });
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent) {
    let term = searchEvent.target.value;
    // We will only perform the search if we have 3 or more characters
    if (term.trim() !== '') {
      // Get the searched users from discogs
      this.discogsAPI.search(term).subscribe(searchResults => {
        this.searchResults = searchResults;
      });
    }
  }
}
