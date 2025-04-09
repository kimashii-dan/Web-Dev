import { Component, inject } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vacancies-top-ten',
  imports: [CommonModule, RouterModule],
  templateUrl: './vacancies-top-ten.component.html',
  styleUrl: './vacancies-top-ten.component.css',
})
export class VacanciesTopTenComponent {
  vacancyService: VacancyService = inject(VacancyService);
  vacancyList: Vacancy[] = [];

  constructor() {
    this.fetchTop10Vacancies();
  }

  async fetchTop10Vacancies() {
    const vacanciesFromAPI = await this.vacancyService.getTop10Vacancies();
    this.vacancyList = vacanciesFromAPI;
    console.log(vacanciesFromAPI);
  }
}
