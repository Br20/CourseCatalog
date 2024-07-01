import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CourseService } from './course.service';
import { ICourse } from './CatalogInterfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <header class="header-container" >
      <img class="catalog-logo" 
        src="assets/catalog-logo.jpg"
        alt="logo"
        aria-hidden="true"
        routerLink="/"/>
      <div class="header-title" routerLink="/">Knowledge Nest</div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      Made by Brian Nicolás Lugo
    </footer> 
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Knowledge Nest';
}
