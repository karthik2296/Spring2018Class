
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
