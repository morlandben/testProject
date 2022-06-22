import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
selected: Person;
  sreya: Person = new Person("sreya", "email@gmail.com", "1234567890", "6510 pine street", 17, "no middle name")
people: Person [] = [];
  fname: string = ""
  constructor() { }

  ngOnInit() {
    this.people = [this.sreya, new Person("Joe", "joemama@gmail.com", "4021111111", "your moms house", 21, "has 2 mamas"), 
  new Person("Harnoor", "hsingh@unomaha.edu", "7024979640", "Harnoors house", 31, "behemoth of a man")]
  
  for (var i =0; i<this.people.length; i++)
  {console.log(this.people[i]);}

    console.log (this.sreya.name + " " + this.sreya.phone)
    console.log (this.sreya.email)
  }
onClick(person: Person){this.selected = person}
}

