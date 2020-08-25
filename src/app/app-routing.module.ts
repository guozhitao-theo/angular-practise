import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentAndTemplatesComponent } from './component-and-templates/component-and-templates.component';

const routes: Routes = [ // 这个是路由表
  { path: '',  redirectTo: '/component', pathMatch: 'full'}, // 根路由重定向
  { path: 'component', component: ComponentAndTemplatesComponent } // 路由和组件
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
