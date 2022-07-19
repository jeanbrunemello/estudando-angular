import { Routes, RouterModule } from '@angular/router';
import { ComponentAngularComponent } from './component-angular/component-angular.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ExternoComponent } from './externo/externo.component';
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
    },
    {
        path: 'component-angular',
        component: ComponentAngularComponent
    },
    {
        path: 'in-out',
        component: ExternoComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);