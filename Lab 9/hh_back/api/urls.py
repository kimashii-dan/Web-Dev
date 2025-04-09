from django.urls import path
from .views import get_companies, get_company, get_company_vacancies, VacancyListCreateView, VacancyRetrieveUpdateDestroyView, VacancyRetrieveTopTenView

urlpatterns = [
    path('companies/', get_companies, name='get_companies'),
    path('companies/<int:id>/', get_company, name='get_company'),
    path('companies/<int:id>/vacancies/', get_company_vacancies, name="get_company_vacancies"),
    path('vacancies/', VacancyListCreateView.as_view(), name='vacancy_list_create'),
    path('vacancies/<int:id>/', VacancyRetrieveUpdateDestroyView.as_view(), name='vacancy_detail'),
    path('vacancies/top_ten/', VacancyRetrieveTopTenView.as_view(), name="get_top10_vacancies")
]
