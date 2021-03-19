import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeSaveComponent} from './employee-save/employee-save.component';

const routes: Routes = [
  {path: 'employeeList', component: EmployeeListComponent},
  {path: 'addEmployee', component: EmployeeSaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
