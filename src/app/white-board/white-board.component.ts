import { Component, OnInit } from '@angular/core';
import { SectionServiceClient } from '../services/section.service.client';
import { CourseServiceClient } from '../services/course.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: SectionServiceClient, private courseService: CourseServiceClient) { }

  courses = [];

  ngOnInit() {
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
