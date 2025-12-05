import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForumHeaderComponent } from './components/forum-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForumHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-forum-deploy');
}
