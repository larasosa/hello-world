import { Injectable } from '@angular/core';

import {larasosa} from './larasosa';



@Injectable({
  providedIn: 'root'
})
export class LoaddataService {
  
  constructor() { }

  //function for synchronus method
ldProfile(): larasosa {return larasosa;}
}
