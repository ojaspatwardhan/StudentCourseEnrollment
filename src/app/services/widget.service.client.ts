export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch("http://localhost:8080/api/widget/" + lessonId)
      .then(response => response.json());
  }
}
