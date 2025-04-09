import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company, Vacancy } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css',
})
export class CompanyDetailsComponent {
  companyService: CompanyService = inject(CompanyService);
  companyId: string = '';
  company: Company | null = null;
  vacancies: Vacancy[] | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.companyId = params.get('id')!;
      console.log('Company ID:', this.companyId);
    });

    this.fetchCompanyDetails();
  }

  async fetchCompanyDetails() {
    const [companyFromAPI, vacanciesFromAPI] = await Promise.all([
      this.companyService.getCompany(this.companyId),
      this.companyService.getVacanciesByCompany(this.companyId),
    ]);

    this.company = companyFromAPI;
    this.vacancies = vacanciesFromAPI;
  }
}
