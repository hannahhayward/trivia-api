

export default class Question{
  constructor(data){
    // debugger
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers 
    this.question = data.question
  }
  get template(){
  return  /*html*/ `
  <div class="container-fluid text-center">
    <div class =  "row">
      <div class = "col-3">
        <h2> ${this.question}</h2>
      </div>
    </div>
    <div class = "row d-none" id="answers">
      <div class = "col-3">
        <button class= "btn btn-primary shadow btn-block"> ${this.correctAnswer}</button>
      </div>
      <div class = "col-3">
       ${this.Buttons}
      </div>
    </div>
  </div>
    `

  }
  get Buttons(){
    let template = ''
    this.incorrectAnswers.forEach(i => template += `
      <button class= "btn btn-primary shadow btn-block" > ${i}</button>
    ` )
    return template
  }
}

