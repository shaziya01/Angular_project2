import { Component } from '@angular/core';
import { LoginComponent } from './user-auth/login/login.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  //  events
  getData(val: string) {
    console.warn(val)
  }
  // get text box value and print

  displayVal = '';
  getValue(val: string) {
    console.warn(val)
    this.displayVal = val
  }
  // counter function

  count = 0
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  //  Interpolation and Property Binding
  name = "shaziya"
  disable = false

  // if else 
  show = true

  // if else if 
  color = 'green';

  // switch case
  color2 = 'red';

  // for Loop 
  students = ['shaziya','tarannum','kausar'];

  studentDetail = [
    {name : 'shaziya', rollno : '04', class: 'Tybsc-IT' },
    {name : 'tarannum', rollno : '07', class: 'Sybsc-IT' },
    {name : 'kausar', rollno : '12', class: 'Sybsc-IT' },
    
  ]

  // nested for Loop 

  users = [
    {name : 'shaziya', rollno : '04', IDs : ['instagram','Facebook','snapchat']},
    {name : 'tarannum', rollno : '07', IDs : ['instagram','Facebook','snapchat']},
    {name : 'kausar', rollno : '12', IDs : ['instagram','Facebook','snapchat']}
  ]

  // Style binding 
  
  Color="red";
  bgColor='green';

  updateColor(){
    this.Color="yellow"
    this.bgColor="blue"
  }

  // Basic Form
  
  userData:any={};
  func(data:any){
       console.warn(data)
       this.userData=data
  }

  // Toggle function

display = true
  toggle(){
this.display = !this.display
  }

//  Todo List
list: any[] = [];
  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item});
      console.warn(this.list)
  }
  removeTask(id:number)
  {
   console.warn(id)
   this.list=this.list.filter(item=>item.id!==id)
  }

  // Reusable component

  userDetails = [
    {name:'shaziya',email:'shaziya@gmail.com'},
    {name:'tarannum',email:'tarannum@gmail.com'},
    {name:'kausar',email:'kausar@gmail.com'},
    {name:'abdullah',email:'abdullah@gmail.com'}
  ]

  // Two way Data Binding

  name2 : any;


  // Basic Pipes 

  pipe = "Hii There , Good Morning";
  today = Date();

  capString(item:string){                    //using another method for converting in uppercase
    return item.toUpperCase();
  }

  DataPipe = [                        //json pipe
    {name:'shaziya', age:'20'},
    {name:'sonu',age:'20'}
  ]

  num = 2000.3200;   // number pipe

  curr= 10;
}




