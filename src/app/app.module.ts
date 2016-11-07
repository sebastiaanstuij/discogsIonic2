import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import {UserDetailsPage } from '../pages/user-details/user-details';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { DiscogsAPI } from '../providers/discogsAPI';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    UserDetailsPage,
    ReposPage,
    OrganisationsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    UserDetailsPage,
    ReposPage,
    OrganisationsPage
  ],
  providers: [DiscogsAPI]
})
export class AppModule {}
