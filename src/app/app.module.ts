import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { BirdComponent } from './bird/bird.component';
import { BirdsGroupComponent } from './birds-group/birds-group.component';

@NgModule({
  declarations: [			
    AppComponent,
      TreeComponent,
      BirdComponent,
      BirdsGroupComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
