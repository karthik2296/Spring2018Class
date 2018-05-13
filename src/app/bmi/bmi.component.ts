import {
  Component,
  OnInit
} from '@angular/core';
@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  static module(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
    bmi:Bmi = new Bmi();
    activity = Array<Activity>();
    goal=Array<Goal>();

  
  constructor() {}
  ngOnInit(): void {

    this.activity = Array<Activity>();
    this.activity.push(new Activity(-1, 'Please select'));
    this.activity.push(new Activity(1, 'Little to no exercise'));
    this.activity.push(new Activity(2, 'Light exercise (1–3 days per week)'));
    this.activity.push(new Activity(3, 'Moderate exercise (3–5 days per week)'));
    this.activity.push(new Activity(4, 'Heavy exercise (6–7 days per week)'));
    this.activity.push(new Activity(5, 'Very heavy exercise (twice per day, extra heavy workouts)'));

    // {name: 'Little to no exercise', multiply: 1.2},
    // {name: 'Light exercise (1–3 days per week)', multiply: 1.375}, 
    // {name: 'Moderate exercise (3–5 days per week)', multiply: 1.55},
    // {name: 'Heavy exercise (6–7 days per week)', multiply: 1.725},
    // {name: 'Very heavy exercise (twice per day, extra heavy workouts)', multiply: 1.9}

    this.bmi = new Bmi();
    this.bmi.activity = new Activity(-1,'');  
    
    
    this.goal = Array<Goal>();
    this.goal.push(new Goal(-1, 'Please select'));
    this.goal.push(new Goal(1, 'Lose weight - 1lb per week'));
    this.goal.push(new Goal(2, 'Lose weight - 2lb per week'));
    this.goal.push(new Goal(3, 'Gain weight - 1lb per week'));
    this.goal.push(new Goal(4, 'Gain weight - 2lb per week'));
    this.goal.push(new Goal(5, 'Maintain weight'));

    // $scope.goals = [
    //   {name: 'Lose weight - 1lb per week'}, 
    //   {name: 'Lose weight - 2lb per week', alt: 'tone', cals: 1000},
    //   {name: 'Gain weight - 1lb per week', alt: 'bulk', cals: -500},
    //   {name: 'Gain weight - 2lb per week', alt: 'bulk',cals: -1000},
    //   {name: 'Maintain weight', alt: 'tone', cals: 0}
    // ];

    this.bmi.goal=new Goal(-1,'')
}
}

export class Bmi
{
activity:Activity;
goal:Goal;
}

export class Activity
{
constructor(id:number, name:string) {
    this.id=id;
    this.name=name;
}

id:number;
name:string;
}

export class Goal
{
constructor(id:number, name:string) {
    this.id=id;
    this.name=name;
}

id:number;
name:string;
}





   

    