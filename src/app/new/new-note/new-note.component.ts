import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent {
  selectedNote;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set note(value) {
    if (value) {
      this.selectedNote = Object.assign({}, value);
    }
  }
}
