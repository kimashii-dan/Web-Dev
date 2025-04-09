import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { VacanciesTopTenComponent } from './vacancies-top-ten/vacancies-top-ten.component';

export const routes: Routes = [
  {
    path: '',
    component: VacanciesTopTenComponent,
    title: 'Head Hunter',
  },
  {
    path: 'vacancies',
    component: VacanciesComponent,
    title: 'Vacancies',
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    title: 'Companies',
  },
  {
    path: 'companies/:id',
    component: CompanyDetailsComponent,
    title: 'Company',
  },
  {
    path: 'vacancies/:id',
    component: VacancyDetailsComponent,
    title: 'Vacancy',
  },
];
