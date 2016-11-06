import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import {UserDetailsPage } from '../pages/user-details/user-details';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
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
    UsersPage,
    UserDetailsPage,
    ReposPage,
    OrganisationsPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}
