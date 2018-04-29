import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions = [
  { question: 'Which is the largest country in the world by population?',
    options: ['India', 'USA', 'China', 'Russia'], answer: 2 },
  { question: 'When did the second world war end?',
    options: ['1945', '1939', '1944', '1942'], answer: 0},
  { question: 'Which was the first country to issue paper currency?',
    options: ['USA', 'France', 'Italy', 'China'], answer: 3 },
  { question: 'Which city hosted the 1996 Summer Olympics?',
    options: ['Atlanta', 'Sydney', 'Athens', 'Beijing'], answer: 0 },
  { question: 'Who invented telephone?',
    options: ['Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'], answer: 1 }];

  currentQuestion: number = -1;
  selectedOption: number;
  score = 0;

  start() {
    this.currentQuestion = 0;
  }
  selectOp(i) {
    this.selectedOption = i;
  }
  next() {
    if (this.currentQuestion >= 0) {
      const rightAnswer = this.questions[this.currentQuestion].answer;

      if (this.selectedOption === rightAnswer) {
        this.score++;
      }
    }
    this.currentQuestion++;
    this.selectedOption = null;
  }
}
