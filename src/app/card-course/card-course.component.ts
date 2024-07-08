import { Component, Input } from '@angular/core';
import { ICourse } from '../CatalogInterfaces';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-course',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="course-card" [routerLink]="['/course', course.id]">
      <img class="course-image" src="{{course.img}}" alt="{{course.name}}">
      <div class="course-details">
        <h3 class="course-title">{{course.name}}</h3>
        <p class="course-category">{{ course.category.name }}</p>
        <p class="course-duration">Duration: {{course.duration_time}}</p>
      </div>
    </div>
  `,
  styleUrl: './card-course.component.css'
})
export class CardCourseComponent {
  @Input() course! : ICourse;
}
