import { Injectable } from '@angular/core';
import { Vacancy } from '../../types';
@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  url = 'http://localhost:8000/api/vacancies';
  async getAllVacancies(): Promise<Vacancy[]> {
    const data = await fetch(`${this.url}/`);
    return (await data.json()) ?? [];
  }

  async getVacancy(id: string): Promise<Vacancy> {
    const data = await fetch(`${this.url}/${id}/`);
    return (await data.json()) ?? {};
  }

  async getTop10Vacancies(): Promise<Vacancy[]> {
    const data = await fetch(`${this.url}/top_ten/`);
    return (await data.json()) ?? [];
  }
}
