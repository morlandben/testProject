import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  inputValue1: number = -1
  inputValue2: number = -1
  result: number
  saveOperator: string = ""
  outputString: string = ""
  //these buttons do the multiplying and shit
  math(value: number) {
    this.printOut(value + "")
    if (this.inputValue1 == -1) { 
      this.inputValue1 = value 
    }
    else {
      this.inputValue2 = value 
    }
    
    console.log(this.inputValue1)
      console.log(this.inputValue2)

  }
  operators(op: string) {
   this.printOut(op)
    if (op == '=') {
      console.log(this.inputValue1)
      console.log(this.inputValue2)

      if (this.saveOperator == "+") {
        this.result = this.inputValue1 + this.inputValue2
      }
      if (this.saveOperator == "-") {
        this.result = this.inputValue1 - this.inputValue2
      }
      if (this.saveOperator == "/") {
        this.result = this.inputValue1 / this.inputValue2
      }
      if (this.saveOperator == "*") {
        this.result = this.inputValue1 * this.inputValue2
      }
      if (this.saveOperator == "sqrt") {
        this.result = Math.sqrt(this.inputValue1)
      }
      this.inputValue1 = -1
      this.inputValue2 = -1
    }
    this.saveOperator = op
  }
  printOut(op: string){
this.outputString += op
  }
}