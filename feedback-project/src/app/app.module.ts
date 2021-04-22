import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackboxComponent } from './feedbackbox/feedbackbox.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { DatacontainerDirective } from './feedbacks/feedbacks.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackboxComponent,
    FeedbacksComponent,
    DatacontainerDirective
  ],
  providers: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  entryComponents: [FeedbackboxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
