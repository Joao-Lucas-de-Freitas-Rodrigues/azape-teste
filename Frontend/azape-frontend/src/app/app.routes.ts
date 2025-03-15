import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/guard/auth.guard';
import { LoginGuard } from './services/guard/login.guard';

export const routes: Routes = [
    { path: 'login', 
      component: LoginComponent, 
      canActivate: [LoginGuard] },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: 'login' }
  ];
  