import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { MissingPersonsComponent } from './components/missing-persons/missing-persons.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { AboutComponent } from './dialog/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFieldComponent,
    MissingPersonsComponent,
    BasePageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [MissingPersonsComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
