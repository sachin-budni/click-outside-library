import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickOutsideDirective } from 'click-outside';
@Component({
  selector: 'app-root',
  imports: [ClickOutsideDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('example');
  onClickedOutside() {
    alert('Clicked outside main div');
  }
}
