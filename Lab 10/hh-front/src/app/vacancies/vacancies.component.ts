import { Component, inject } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vacancy',
  imports: [CommonModule, RouterModule],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css',
})
export class VacanciesComponent {
  vacancyService: VacancyService = inject(VacancyService);
  vacancyList: Vacancy[] = [];

  constructor() {
    this.fetchVacancyList();
  }

  async fetchVacancyList() {
    const vacanciesFromAPI = await this.vacancyService.getAllVacancies();
    this.vacancyList = vacanciesFromAPI;
  }
}
