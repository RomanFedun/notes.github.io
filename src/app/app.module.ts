import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { NoteListComponent } from './site-layout/note-list/note-list.component';
import { CreateComponent } from './site-layout/note-list/create/create.component';
import { EditComponent } from './site-layout/edit/edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    NoteListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
