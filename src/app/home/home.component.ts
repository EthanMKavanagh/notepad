import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notes = null;
  selectedNote = null;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.notes = this.homeService.all()
      .subscribe(notes => this.notes = notes);
  }

}
