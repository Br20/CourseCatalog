import { Component, inject } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ICourse } from '../CatalogInterfaces';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container">
      <!-- Course Information Section -->
      <div class="course-info">
        <h1 class="course-name">{{course?.name}}</h1>
        <img src="{{course?.img}}" alt="{{course?.name}}" class="course-img">
        <p class="course-category">{{course?.category?.name}}</p>
        <p class="course-description">{{course?.brief_description}}</p>
        <p class="course-duration">Duration: <span>{{course?.duration_time}}</span> Hours.</p>
      </div>

      <!-- Application Form Section -->
      <div class="apply-form">
        <h2>Apply for the Course</h2>
        <form action="/submit-application" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>

          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  `,
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
    courseService : CourseService = inject(CourseService)
    route : ActivatedRoute = inject(ActivatedRoute);
    course : ICourse | undefined;
    constructor(){
      this.courseService.getCourseById(this.route.snapshot.params['id'])
      .then((c)=> this.course = c)
    }
}
