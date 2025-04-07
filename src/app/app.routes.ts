import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarouselComponent } from './pages/accueil/carousel/carousel.component';
import { ConnexionComponent } from './pages/connexion/connexion/connexion.component';
import { TiragesComponent } from './pages/tirages/tirages.component';
import { OrigineTarotComponent } from './pages/origine-tarot/origine-tarot.component';
import { GalerieComponent } from  './pages/galerie/galerie.component';
import { PremiumComponent } from './pages/premium/premium.component';
import { InscriptionComponent } from './pages/connexion/inscription/inscription.component';

export const routes: Routes = [{

        path: '',
        redirectTo: "accueil",
        pathMatch: 'full'
    },{
        path: "accueil",
        component: CarouselComponent,
    },
    {
        path: "connexion",
        component: ConnexionComponent,
    },
    {
        path: "inscription",
        component: InscriptionComponent,
    },
    {
        path: "tirages",
        component: TiragesComponent,
    },
    {
        path: "origine",
        component: OrigineTarotComponent,
    },
    {
        path: "galerie",
        component: GalerieComponent,
    },
    {
        path: "premium",
        component: PremiumComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
