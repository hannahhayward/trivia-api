import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { triviaService } from "../Services/QuestionsService.js"




function drawQuestions(){
  let template = ''
  // debugger
  ProxyState.questions.forEach(question => template += question.template)
  document.getElementById('app').innerHTML = template
}


export class QuestionsController{
  constructor(){
    ProxyState.on('questions', drawQuestions)
    drawQuestions()
    this.getQuestions()
  }
  getQuestions(){
    try {triviaService.getQuestions()
      
    } catch (error) {
      alert (error.message)
      
    }
  }
  showAnswers(){
    document.getElementById('answers').classList.remove('d-none')
  }
}