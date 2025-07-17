import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiragesComponent } from './tirages.component';
import { TiragesService } from '../../services/tirages/tirages.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('TiragesComponent', () => {
  let component: TiragesComponent;
  let fixture: ComponentFixture<TiragesComponent>;
  let tiragesService: TiragesService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TiragesComponent],
      providers: [TiragesService],
    }).compileComponents();

    fixture = TestBed.createComponent(TiragesComponent);
    component = fixture.componentInstance;
    tiragesService = TestBed.inject(TiragesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a tirage', () => {
    const mockResponse = {
      tirage: [
        {
          id: 1,
          carte_nom: "L'Amoureux",
          carte_signification:
            "La signification première des Amoureux est l'harmonie, l'attrait et la perfection dans une relation. La confiance et l'unité qui règnent entre les amants donnent à chacun d'eux de l'assurance et de la force, ce qui renforce l'autre. Le lien qu'ils ont créé est très fort et peut indiquer que les deux sont unis par le mariage et d'autres relations étroites et intimes. Une autre signification de la carte des amoureux est le concept de choix - un choix entre des choses qui s'opposent et s'excluent mutuellement. Il peut s'agir d'un dilemme auquel vous devez réfléchir attentivement et prendre la meilleure décision dans votre situation.",
          image:
            'https://res.cloudinary.com/dv1fzsswi/image/upload/v1743624775/Amoureux_bg5cso.jpg',
        },
      ],
    };
    tiragesService.getTirageParUser().subscribe((response) => {
      component.tirages = response.tirage;
      expect(component.tirages.length).toBe(1);
      expect(component.tirages[0].id).toBe(1);
      expect(component.tirages[0].carte_nom).toBe("L'Amoureux");
    });
    // mock la GET request
    const req = httpMock.expectOne('http://localhost:3000/tirages/');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });



  it('should return a valid tirage', () => {
    const mockResponse = {
      tirage: [
        {
          id: 42,
          carte_nom: 'Any Name',
          carte_signification: 'Some description...',
          image: 'https://some-url.com/image.jpg',
        },
      ],
    };
    tiragesService.getTirageParUser().subscribe((response) => {
      const tirage = response.tirage[0];
      expect(tirage).toBeDefined();
      expect(tirage.carte_nom).toBeTruthy(); 
      expect(tirage.image).toMatch(/^https?:\/\//); 
    });
    const req = httpMock.expectOne('http://localhost:3000/tirages/');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });

});
