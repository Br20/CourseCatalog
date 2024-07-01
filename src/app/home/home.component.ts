import { Component, inject } from '@angular/core';
import { CourseService } from '../course.service';
import { ICategory } from '../CatalogInterfaces';
import { CardCategoryComponent } from '../card-category/card-category.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardCategoryComponent],
  template: `
    <section class="card-container">
      @for (category of categoryList; track category.id){    

        <app-card-category [category]="category"/>

      }
    </section>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courseService : CourseService = inject(CourseService);
  categoryList : ICategory[] = [];
  constructor(){
    this.courseService.getAllCategories()
    .then((categories)=> this.categoryList = categories);
  }
}
