import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoginGuard } from 'src/app/core/guards/login.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BoardComponent } from './layouts/board/board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path: '', 
    component: BoardComponent, 
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard] 
  }, {
    path: 'login', 
    component: LoginComponent, 
    canActivate: [LoginGuard]
  }, {
    path: 'register', 
    component: RegisterComponent, 
    canActivate: [LoginGuard]
  }, {
    path: 'forgot-password', 
    component: ForgotPasswordComponent, 
    canActivate: [LoginGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
