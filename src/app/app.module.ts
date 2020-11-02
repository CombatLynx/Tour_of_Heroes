import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsComponent } from './groups/groups.component';
import { MessagesComponent } from './messages/messages.component';
import { MusicPanelComponent} from './music-panel/music-panel.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    GroupsComponent,
    GroupDetailComponent,
    MessagesComponent,
    MusicPanelComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
