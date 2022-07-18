import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PostSimulatorComponent } from './post-simulator/post-simulator.component';
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
    },
    {
        path: 'post-simulator',
        component: PostSimulatorComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);