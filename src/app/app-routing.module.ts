import { Routes, RouterModule } from '@angular/router';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { ComponentAngularComponent } from './component-angular/component-angular.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExternoComponent } from './externo/externo.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
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
    },
    {
        path: 'diretivas',
        component: DiretivasComponent
    },
    {
        path: 'lista-alunos',
        component: ListaAlunosComponent
    },
    {
        path: 'ciclo-de-vida',
        component: CicloDeVidaComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);