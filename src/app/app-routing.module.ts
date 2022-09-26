import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login/login.component';
import { NotFoundComponent } from './components/messages/not-found/not-found.component';

// guards
import { AuthGuard } from './guard/auth-guard.service';
import { Role } from './interfaces/role/role';

export const routes: Routes = [
  { path: 'tickets',
    loadChildren: () => import('./view/tickets/tickets.module').then(m => m.TicketsModule)
  },
  { path: 'demo',
    // canActivate: [AuthGuard],
    // data: { roles: [Role.SuperAdmin]},
    loadChildren: () => import('./view/components-demo/components-demo.module').then(m => m.ComponentsDemoModule)
  },
  { path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./view/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'customer',
    canActivate: [AuthGuard],
    loadChildren: () => import('./view/customer/customer.module').then(m => m.CustomerModule)
  },
  { path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () => import('./view/user/user.module').then(m => m.UserModule)
  },
  { path: 'config',
    canActivate: [AuthGuard],
    loadChildren: () => import('./view/config/config.module').then(m => m.ConfigModule)
  },
  { path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./view/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: 'owner',
    canActivate: [AuthGuard],
    loadChildren: () => import('./view/owner/owner.module').then(m => m.OwnerModule)
  },
  { path: 'ownership',
    canActivate: [AuthGuard],
    loadChildren: () => import('./view/ownership/ownership.module').then(m => m.OwnershipModule)
  },
  { path: 'change-password', loadChildren: () => import('./view/change-password/change-password.module').then(m => m.ChangePasswordModule)},
  { path: 'login', component: LoginComponent },
  { path: 'password-reset', loadChildren: () => import('./view/password-reset/password-reset.module').then(m => m.PasswordResetModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/tickets', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
