import { Component, inject } from '@angular/core';
import { Company } from '../../types';
import { CompanyService } from '../services/company.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company',
  imports: [CommonModule, RouterModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export class CompaniesComponent {
  companyService: CompanyService = inject(CompanyService);
  companyList: Company[] = [];

  constructor() {
    this.fetchCompanyList();
  }

  async fetchCompanyList() {
    const companiesFromAPI = await this.companyService.getAllCompanies();
    this.companyList = companiesFromAPI;
  }
}
