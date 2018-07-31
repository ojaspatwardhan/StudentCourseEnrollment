import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model.client';
import { CourseServiceClient } from '../services/course.service.client';
import { SectionServiceClient } from '../services/section.service.client';
declare var jquery:any;
declare var $:any;


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  courses: Course []= [];

  sections = [];
  enrollments = [];

  sectionName = "";
  numberOfSeats = "";

  constructor(private service: CourseServiceClient, private sectionService: SectionServiceClient) { }

  ngOnInit() {
    this.service.findAllCourses().then(courses => this.courses = courses);
    this.sectionService.findSectionById("5b59b6771138ee044b94a3e6").then(section => console.log(section));
  }

  createSection(courseId, sectionName, numberOfSeats) {
    this.sectionService.createSection(courseId, sectionName, numberOfSeats);
  }

  findSectionsForCourse(courseId) {
    this.sectionService.findSectionsForCourse(courseId)
    .then(sections => this.sections = sections);
    this.findEnrollmentForSection();
  }

  findEnrollmentForSection() {
    console.log("inside findEnrollmentForSection");
    this.sections.map((section) => {
      this.sectionService.findEnrollmentForSection(section._id);
    });
  }

  deleteSection(sectionId) {
    this.sectionService.deleteSection(sectionId).then($("#exampleModal").modal("toggle"));
  }

  updateSection(sectionId, sectionName, numberOfSeats) {
    // console.log(sectionName + " " + numberOfSeats);
    this.sectionService.updateSection(sectionId, sectionName, numberOfSeats).then($("#exampleModal").modal("toggle"));
  }

}
