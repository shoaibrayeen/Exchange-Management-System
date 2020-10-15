import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { ForexComponent } from './forex/forex.component';
import { HeaderComponent } from './header/header.component';
import { ReportComponent } from './report/report.component';

import { AuthGuard } from './core/guard/auth.guard';
import { RedirectGuard } from './core/guard/redirect.guard';
import { ApproverGuard } from './core/guard/approver.guard';

const routes: Routes = [
		{ path: 'login', component: LoginComponent, canActivate: [RedirectGuard] },
		{ path: 'account', component: AccountComponent, canActivate: [ApproverGuard] },
		{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
		{ path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
		{ path: 'forex', component: ForexComponent, canActivate: [AuthGuard] },
		{ path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
		{ path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
		{ path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
