import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    MenuComponent,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sneakers';
}
