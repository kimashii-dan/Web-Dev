import { Injectable } from '@angular/core';
import { Company, Vacancy } from '../../types';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  url = 'http://localhost:8000/api/companies';
  async getAllCompanies(): Promise<Company[]> {
    const data = await fetch(`${this.url}/`);
    return (await data.json()) ?? [];
  }

  async getCompany(id: string): Promise<Company> {
    const data = await fetch(`${this.url}/${id}/`);
    return (await data.json()) ?? {};
  }

  async getVacanciesByCompany(id: string): Promise<Vacancy[]> {
    const data = await fetch(`${this.url}/${id}/vacancies/`);
    return (await data.json()) ?? [];
  }
}
