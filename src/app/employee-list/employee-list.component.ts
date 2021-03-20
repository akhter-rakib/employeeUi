import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeService: EmployeeServiceService) {
    employeService.printToConsole('Hello Dev');
  }

  ngOnInit(): void {
  }

}
