import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent {
  newNote;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set note(value) {
    if (value) {
      this.newNote = Object.assign({}, value);
    }
  }
}
