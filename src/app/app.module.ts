import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CdFooterComponent } from './shared/cd-footer.component';
import { CdJumbotronComponent } from './shared/cd-jumbotron.component';
import { CdMainNavComponent } from './shared/main-nav/cd-main-nav.component';
import { CdPlaylistComponent } from './shared/playlist/cd-playlist.component';
import { CdFilterComponent } from './shared/playlist/filter/cd-filter.component';
import { CdSearchComponent } from './shared/playlist/filter/cd-search.component';
import { CdAboutComponent } from './cd-about.component';
import { SettingsComponent } from './user/settings/settings.component';
import { UserPlaylistComponent } from './user/user-playlist.component';

import {CdPlaylistService} from "./shared/playlist/cd-playlist.service";
import {UserPlaylistService} from "./user/user-playlist.service";
import {SettingsService} from "./user/settings/settings.service";

@NgModule({
  declarations: [
    AppComponent,
    CdFooterComponent,
    CdJumbotronComponent,
    CdMainNavComponent,
    CdPlaylistComponent,
    CdFilterComponent,
    CdSearchComponent,
    CdAboutComponent,
    SettingsComponent,
    UserPlaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CdPlaylistService,
              SettingsService,
              UserPlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
