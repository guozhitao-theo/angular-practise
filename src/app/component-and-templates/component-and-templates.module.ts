import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { HLModule } from '../directive/hightlightDirective/hl.module';
import { DisplayDataComponent } from '../modals/display-data/display-data.component';
import { ComponentAndTemplatesComponent } from './component-and-templates.component'; // module 模块可以在 根module中

@NgModule({
  // providers: [], 数组 需要我们列出这个模块的一些需要的公共的服务
  declarations: [DisplayDataComponent, ComponentAndTemplatesComponent],
  // declarations: [DisplayDataComponent],
  imports: [
    // CommonModule,
    FormsModule,
    HLModule
  ],
  providers: []
})
export class ComponentAndTemplatesModule { }
