export class CourseNavigatorServiceClient {

  findAllModulesForCourse(courseId) {
    return fetch("http://localhost:8080/api/course/" + courseId + "/module").then(response => response.json());
  }
}
