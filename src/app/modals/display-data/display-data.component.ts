import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/class/hero';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.less']
})
export class DisplayDataComponent implements OnInit {
  condition = false;
  color: string;
  title = 'gzt';
  hero = ['小明', '小品里', '效力', '校长', '小红'];
  heros = [
    new Hero(1, '小明'),
    new Hero(2, '小李'),
    new Hero(3, '小张'),
    new Hero(4, '小红')
  ];
  herourl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1950939702,1148476184&fm=15&gp=0.jpg://www.baidu.com';
  count = 0;
  name: 'gzt';
  values =  '';
  constructor() { }

  ngOnInit(): void {
  }
  public add(n): void {
    console.log(111);
    this.count += n;
  }
  public onKey(val: string): void {
    console.log(val);
    this.values = val;
  }
  public changeCondition(): void {
    console.log(this.condition);
    this.condition = !this.condition;
  }

}
