import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AHeaderComponent } from './a-header/a-header.component';
import { BSkillsComponent } from './b-skills/b-skills.component';
import { CProjectsComponent } from './c-projects/c-projects.component';
import { DAboutComponent } from './d-about/d-about.component';
import { EContactComponent } from './e-contact/e-contact.component';
import { FFooterComponent } from './f-footer/f-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AHeaderComponent,
    BSkillsComponent,
    CProjectsComponent,
    DAboutComponent,
    EContactComponent,
    FFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
