import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IntroductionComponent } from './introduction/introduction.component';
const routes: Routes = [
    {
        path: '',
        component: IntroductionComponent
    },
    {
        path: 'introduction',
        component: IntroductionComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);