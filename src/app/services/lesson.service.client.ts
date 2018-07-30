export class LessonServiceClient {
  findAllLessonsForModule(moduleId) {
    return fetch("http://localhost:8080/api/module/" + moduleId + "/lesson")
    .then(response => response.json());
  }
}
