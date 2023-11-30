import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AsistenciaPage } from './pages/asistencia/asistencia.page';
import { HomePage } from './home/home.page';
import { ConfirmationPage } from './pages/confirmation/confirmation.page';
import { RickPage } from './pages/rick/rick.page';
import { DetallePersonajePage } from './pages/detalle-personaje/detalle-personaje.page';
import { IntroPage } from './pages/intro/intro.page';

const routes: Routes = [
  {
    path: 'home',canActivate: [AuthGuard], component: HomePage,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'confirmation',canActivate: [AuthGuard], component: ConfirmationPage,
    loadChildren: () => import('./pages/confirmation/confirmation.module').then( m => m.ConfirmationPageModule),
  },
  {
    path: 'rick',canActivate: [AuthGuard],
    loadChildren: () => import('./pages/rick/rick.module').then( m => m.RickPageModule)
  },
  {
    path: 'detalle-personaje/:id',canActivate: [AuthGuard],
    loadChildren: () => import('./pages/detalle-personaje/detalle-personaje.module').then( m => m.DetallePersonajePageModule)
  },
  {
    path: 'intro',canActivate: [AuthGuard], component: IntroPage,
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'asistencia',canActivate: [AuthGuard], component: AsistenciaPage,
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
