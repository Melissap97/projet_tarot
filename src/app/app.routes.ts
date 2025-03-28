import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarouselComponent } from './pages/accueil/carousel/carousel.component';

export const routes: Routes = [{

        path: '',
        redirectTo: "accueil",
        pathMatch: 'full'
    },{
        path: "accueil",
        component: CarouselComponent,
       },
       {
        path: '**',
        component: NotFoundComponent,
    }
];
