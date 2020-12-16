import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  selectedNote = {
    id: null,
    title: '',
    description: ''
  };
  notes = null;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void { }

  cancel() {
    this.resetNotes();
  }

  refreshNotes() {
    this.resetNotes();
  }

  resetNotes() {
    const emptyNote = {
      id: null,
      title: '',
      description: ''
    }
    this.selectedNote = emptyNote;
  }

  saveNote(note) {
    if(note.id) {
      this.noteService.update(note)
        .subscribe(result => this.router.navigateByUrl('/home'))
    } else {
      this.noteService.create(note)
        .subscribe(result => this.router.navigateByUrl('/home'))
    }
  }
}
