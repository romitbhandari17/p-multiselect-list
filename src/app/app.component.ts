import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom p-multiselect-list Widget!!';

  public itemsLeft:Object[];
  public itemsRight:Object[];
  public type:string;
  public label:string;

  ngOnInit(){
    this.itemsRight=[];
    this.itemsLeft = [
      {'name':'0-50', 'id':1 },
      {'name':'50-100', 'id' : 2 },
      {'name':'100-500', 'id' : 3 },
      {'name':'500-2000', 'id':4 },
      {'name':'2000-10000', 'id':5 }
    ];

    this.type="box";
    this.label="Employee Size";
  }
}
