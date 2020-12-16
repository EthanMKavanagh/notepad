import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  newNote = null;
  notes = null;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

  }

  cancel() {
    this.resetNotes();
  }

  loadNotes() {
    this.notes = this.noteService.all()
      .subscribe(notes => this.notes = notes);
  }

  refreshNotes() {
    this.resetNotes();
    this.loadNotes();
  }

  resetNotes() {
    const emptyNote = {
      id: null,
      title: '',
      description: ''
    }
    this.newNote = emptyNote;
  }

  saveNote(note) {
    if(note.id) {
      this.noteService.update(note);
    } else {
      this.noteService.create(note);
    }
  }
}
