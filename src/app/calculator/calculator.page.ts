import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  display = '0';
  firstval: number = null;
  operator: any = null;
  newcursor = false;
  c = false;
  period = false;

  constructor() {}

  click(val: any) {
    switch (val) {
      case 'ac':
        this.display = '0';
        this.firstval = null;
        this.operator = null;
        this.newcursor = false;
        break;
      case 'c':
        this.display = '0';
        this.c = false;
        break;
      case '+/-':
        if (Math.sign(parseInt(this.display, 0)) == 1) {
          const sign = Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();
        } else if (Math.sign(parseInt(this.display, 0)) == -1) {
          const sign = Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();
        } else {
          this.display = this.display;
        }
        break;
      case '%':
        this.addpercent();
        break;
      case '&divide;':
        this.addoperator('&divide;');
        break;
      case '&times;':
        this.addoperator('&times;');
        break;
      case '-':
        this.addoperator('-');
        break;
      case '+':
        this.addoperator('+');
        break;
      case '=':
        if (this.firstval !== null && this.operator !== null) {
          this.calclast();
        }
        this.operator = null;
        break;
      case '0':
        this.addnumber('0');
        break;
      case '1':
        this.addnumber('1');
        break;
      case '2':
        this.addnumber('2');
        break;
      case '3':
        this.addnumber('3');
        break;
      case '4':
        this.addnumber('4');
        break;
      case '5':
        this.addnumber('5');
        break;
      case '6':
        this.addnumber('6');
        break;
      case '7':
        this.addnumber('7');
        break;
      case '8':
        this.addnumber('8');
        break;
      case '9':
        this.addnumber('9');
        break;
      case '.':
        this.addperiod();
        break;
    }
  }
  addperiod() {
    if (this.period == false) {
      this.period = true;
    } else {
      this.period = false;
    }
  }
  addpercent() {
    this.period = false;
    const dispval = parseInt(this.display, 0) / 100;
    this.display = dispval.toString();
  }
  addoperator(op: string) {
    if (this.newcursor == false) {
      if (this.firstval == null) {
        if (this.period == true) {
          this.firstval = parseFloat(this.display);
        } else {
          this.firstval = parseInt(this.display, 0);
        }
      }
      if (this.firstval !== null && this.operator !== null) {
        this.calclast();
      }
    }
    this.period = false;
    this.operator = op;
    this.newcursor = true;
  }
  calclast() {
    switch (this.operator) {
      case '&divide;':
        if (this.period == true) {
          this.firstval = this.firstval / parseFloat(this.display);
        } else {
          this.firstval = this.firstval / parseInt(this.display, 0);
        }
        break;
      case '&times;':
        if (this.period === true) {
          this.firstval = this.firstval * parseFloat(this.display);
        } else {
          this.firstval = this.firstval * parseInt(this.display, 0);
        }
        break;
      case '-':
        if (this.period === true) {
          this.firstval = this.firstval - parseFloat(this.display);
        } else {
          this.firstval = this.firstval - parseInt(this.display, 0);
        }
        break;
      case '+':
        if (this.period === true) {
          this.firstval = this.firstval + parseFloat(this.display);
        } else {
          this.firstval = this.firstval + parseInt(this.display, 0);
        }
        break;
    }
    this.display = this.firstval.toString();
  }
  addnumber(num: string) {
    if (num === '0') {
      if (this.newcursor === true) {
        this.display = num;
        this.newcursor = false;
      } else if (this.display !== '0') {
        if (this.period === true) {
          this.display = `${this.display.toString()}.${num}`;
        } else {
          this.display = this.display.toString() + num;
        }
      } else if (this.display === '0') {
        if (this.period === true) {
          this.display = `${this.display.toString()}.${num}`;
        }
      }
    } else {
      if (this.newcursor === true) {
        this.display = num;
        this.newcursor = false;
      } else if (this.display === '0') {
        if (this.period === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + num;
          } else {
            this.display = `${this.display.toString()}.${num}`;
          }
        } else {
          this.display = num;
        }
      } else {
        if (this.period === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + num;
          } else {
            this.display = `${this.display.toString()}.${num}`;
          }
        } else {
          this.display = this.display.toString() + num;
        }
      }
    }
    this.c = true;
  }
}
