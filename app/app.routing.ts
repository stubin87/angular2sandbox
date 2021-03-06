import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TodosComponent } from './todos/todos.component';
import { AllTodosComponent } from './todos/all-todos.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: DashboardComponent 
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: 'all-todos',
        component: AllTodosComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
    DashboardComponent,
    TodosComponent,
    AllTodosComponent
];