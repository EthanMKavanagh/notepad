import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { NoteService } from '../services/note.service';
import { HttpInterceptorService } from '../services/http-interceptor.service';
import { NewNoteComponent } from './new-note/new-note.component';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    NewRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    NewComponent,
    NewNoteComponent
  ],
  providers: [
    NoteService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ]
})
export class CoursesModule { }