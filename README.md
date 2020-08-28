# angular 遇到的问题 以及如何解决
1. 报错 `1. If 'app-display-data' is an Angular component, then verify that it is part of this module. 2.If 'app-display-data' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.`
    ==原因：== 组件没有在.module.ts 文件中注册，或者可以直接在路由懒加载
2. 使用表单组件的时候报错
    ==解决：== 需要在 module.ts 中 引入 import { FormsModule } from '@angular/forms';并注册到import中
3. 属性绑定的时候，绑定总是优先于静态值
4. 照官网流程自定义属性指令的时候，发现 指令仅能在 根组件生效
    ==解决：==在angular中共享的只有service，其它的都不行 ，将指令 包装成 模块 然后以模块的方式去引入。（）