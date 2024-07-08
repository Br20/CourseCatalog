import { Component, inject } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ICourse } from '../CatalogInterfaces';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <!-- Course Information Section -->
      <div class="course-info">
        <h1 class="course-name">{{course?.name}}</h1>
        <img src="{{course?.img}}" alt="{{course?.name}}" class="course-img">
        <p class="course-category">{{course?.category?.name}}</p>
        <p class="course-description">{{course?.brief_description}}</p>
        <p class="course-duration">Duration: <span>{{course?.duration_time}}</span></p>
      </div>

      <!-- Application Form Section -->
      <div class="apply-form">
        <h2>Apply for the Course</h2>
        <form [formGroup]="applyForm" (submit)="handleSubmit()">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Jonh Doe" formControlName="name">
          <p class="error" [hidden]="name.valid || name.untouched">Name is required</p>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="example@email.com" formControlName="email">
          <p class="error" [hidden]="email.valid || email.untouched">
            @if(email.errors?.['required'])
              {Email is required} 
            @else
              {Must be a valid email}
          </p>

          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write here your message to apply" formControlName="message"></textarea>
          <p class="error" [hidden]="message.valid || message.untouched">@if(message.errors?.['required']){Message is required} @else{Minimun length is 10 characters}</p>

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
    applyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
    constructor(){
      this.courseService.getCourseById(this.route.snapshot.params['id'])
      .then((c)=> this.course = c)
    }

    handleSubmit(){
      if (this.applyForm.valid){
        alert([this.applyForm.value.name ?? '',
          this.applyForm.value.email ?? '',
          this.applyForm.value.message ?? ''])
        this.applyForm.reset();
      }
    }

    get name(){
      return this.applyForm.get('name') as FormControl;
    }

    get email(){
      return this.applyForm.get('email') as FormControl;
    }

    get message(){
      return this.applyForm.get('message') as FormControl;
    }
}
