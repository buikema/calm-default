import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CdFooterComponent } from './shared/cd-footer.component';
import { CdJumbotronComponent } from './shared/cd-jumbotron.component';
import { CdMainNavComponent } from './shared/main-nav/cd-main-nav.component';
import { CdPlaylistComponent } from './shared/playlist/cd-playlist.component';
import { CdFilterComponent } from './shared/filter/cd-filter.component';
import { CdSearchComponent } from './shared/filter/cd-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CdFooterComponent,
    CdJumbotronComponent,
    CdMainNavComponent,
    CdPlaylistComponent,
    CdFilterComponent,
    CdSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
