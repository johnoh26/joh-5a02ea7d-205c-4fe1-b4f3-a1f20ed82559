import { Route } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TaskComponent } from '../task/task.component';

export const appRoutes: Route[] = [
	{ path: 'login', component: LoginComponent },
	{
		path: 'tasks',
		component: TaskComponent,
	},
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: '**', redirectTo: 'login' },
];
