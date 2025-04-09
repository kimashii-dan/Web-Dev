import { Component, inject } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Vacancy } from '../../types';

@Component({
  selector: 'app-vacancy-details',
  imports: [RouterModule],
  templateUrl: './vacancy-details.component.html',
  styleUrl: './vacancy-details.component.css',
})
export class VacancyDetailsComponent {
  vacancyService: VacancyService = inject(VacancyService);
  vacancyId: string = '';
  vacancy: Vacancy | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.vacancyId = params.get('id')!;
      console.log('Vacancy ID:', this.vacancyId);
    });

    this.fetchVacancyDetails();
  }

  async fetchVacancyDetails() {
    const vacancyFromAPI = await this.vacancyService.getVacancy(this.vacancyId);
    this.vacancy = vacancyFromAPI;
  }
}
