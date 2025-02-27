import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [{

        path: '',
        redirectTo: "accueil",
        pathMatch: 'full'
    },{
        path: "accueil",
        component: AccueilComponent,
       },
       {
        path: '**',
        component: NotFoundComponent,
    }
];
