import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatExpansionModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './questions/questions.service';
import { ResultsDialogComponent } from './questions/results-dialog/results-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ResultsDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule
  ],
  entryComponents : [ResultsDialogComponent],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
