import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppunless]'
})
export class AppunlessDirective {
  private hasView = false;
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) { // 如果条件为假 并且以前 为创建过该视图，告诉视图容器 根据模板创建一个内嵌视图
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
