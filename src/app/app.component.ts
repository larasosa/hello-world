import { Component, OnInit, Input } from '@angular/core';
import {larasosa} from './larasosa';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'larasosa-A4';
  pData: larasosa; 
  user: any;
  @Input('name') userName: string;

constructor (private lService: LoaddataService){}
ngOnInit(){
  this.lpLoad();
}
lpLoad(): void{
  this.pData = this.lService.ldProfille();
}


