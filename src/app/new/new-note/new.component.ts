import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewNoteComponent {
  selectedNote = null;
  notes = null;

  // @Output() save = new EventEmitter();
  // @Output() cancelled = new EventEmitter();

  // @Input() set note(value) {
  //   if (value) {
  //     this.selectedNote = Object.assign({}, value);
  //   }
  // }

  saved(value) {
    if(value) {
      this.selectedNote = Object.assign({}, value);
    }
  }

  // saveNote(selectedNote) {
  //   if(selectedNote.id) {
  //     this.note
  //   }
  // }
}
