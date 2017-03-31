import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFoodComponent,
    NewFoodComponent,
    EditFoodComponent
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
