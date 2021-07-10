import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { HeaderComponent } from './header/header.component';
import { PhotoComponent } from './photo/photo.component';
import { BoostValuePipe } from './boost-value.pipe';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
  { path: 'not-found', redirectTo: 'photos', pathMatch: 'full' },
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: 'photos' },
];

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    HeaderComponent,
    PhotoComponent,
    BoostValuePipe,
    UsersComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
