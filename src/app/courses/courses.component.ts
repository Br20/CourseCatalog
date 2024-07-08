import { Component, inject } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../CatalogInterfaces';
import { CardCourseComponent } from '../card-course/card-course.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CardCourseComponent],
  template: `
    <section class="course-container">
      <p class="courses-text">These are all the courses in our catalog</p>
      @for (course of courseList; track course.id){    
        
        <app-card-course [course]="course"/>

      }
    </section>
  `,
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseService : CourseService = inject(CourseService);
  courseList : ICourse[] = [];
  courseFilteredList : ICourse[] = []; 
  constructor(){
    this.courseService.getAllCourses()
    .then((courses : ICourse[])=>  this.courseList = courses)
  }
}
