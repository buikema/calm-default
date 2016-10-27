import {RouterModule, Routes} from "@angular/router";

import {CdPlaylistComponent} from "./shared/playlist/cd-playlist.component";
import {CdAboutComponent} from "./cd-about.component";
import {SettingsComponent} from "./user/settings/settings.component";


const APP_ROUTES: Routes = [
  { path: '', component: CdPlaylistComponent },
  { path: 'about', component: CdAboutComponent },
  { path: 'settings', component: SettingsComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);
