import { Component, OnInit } from '@angular/core';
import { SectionServiceClient } from '../services/section.service.client';
import { CourseServiceClient } from '../services/course.service.client';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: SectionServiceClient, private courseService: CourseServiceClient, private cookieService: CookieService) { }

  courses = [];
  cookieValue = "";

  ngOnInit() {
    this.cookieValue = this.cookieService.get("username");
    this.service.findSectionsForStudent().then(enrollments => {
      if(enrollments.length != 0) {
        enrollments.map((enrollment) => {
          this.courseService.findCourseById(enrollment.section.courseId)
          .then(course => {
            console.log(course)
        this.courses.push(course);
      });
        })
      }
    });
  }

}
