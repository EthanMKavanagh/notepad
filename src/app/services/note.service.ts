import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private model = 'new';

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  create(note) {
    return this.http.post(this.getUrl(), note);
  }

  delete(note) {
    return this.http.delete(`${this.getUrlById(note.id)}`, note);
  }

  find(note) {
    return this.http.get(this.getUrlById(note.id));
  }

  update(note) {
    return this.http.put(`${this.getUrlById(note.id)}`, note);
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
