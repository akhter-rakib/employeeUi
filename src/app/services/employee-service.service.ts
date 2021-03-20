import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl = environment.apiurl.service;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  printToConsole(arg) {
    console.log(arg);
  }

  /* getCarGradeList(): any {
     return this.http.get(this.baseUrl + '/carGrades');
   }

   getEmployeesList(): Observable<any> {
     return this.http.get(`${this.baseUrl}`);
   }*/
}
