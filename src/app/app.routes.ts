import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then(m => m.HomeComponent)
        }
    },
    {
        path: 'mechanics',
        loadComponent: () => {
            return import('./components/game-mechanics/game-mechanics.component').then(m => m.GameMechanicsComponent)
        }
    }
];
