import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteLayoutComponent} from './site-layout/site-layout.component';
import {NoteListComponent} from './site-layout/note-list/note-list.component';
import {CreateComponent} from './site-layout/note-list/create/create.component';
import {EditComponent} from './site-layout/edit/edit.component';

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: '', redirectTo: '/note', pathMatch: 'full'},
      {path: 'note', component: NoteListComponent},
      {path: 'create', component: CreateComponent},
      {path: 'edit/:id', component: EditComponent}
      ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
