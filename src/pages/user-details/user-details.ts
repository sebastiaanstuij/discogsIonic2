import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { SearchResult } from '../../models/searchResult';

import { DiscogsAPI } from '../../providers/discogsAPI';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: SearchResult;
  login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private discogsAPI: DiscogsAPI) {
    this.login = navParams.get('login');
    // discogsAPI.loadDetails(this.login).subscribe(user => {
    //   this.user = user;
    // })
  }
}
// blabla
