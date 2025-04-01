from django.urls import path
from .views import get_companies, get_company, get_company_vacancies, get_vacancies, get_vacancy, get_top10_vacancies

urlpatterns = [
    path('companies/', get_companies, name='get_companies'),
    path('companies/<int:id>/', get_company, name='get_company'),
    path('companies/<int:id>/vacancies/', get_company_vacancies, name="get_company_vacancies"),
    path('vacancies/', get_vacancies, name='get_vacancies'),
    path('vacancies/<int:id>/', get_vacancy, name="get_vacancy"),
    path('vacancies/top_ten/', get_top10_vacancies, name="get_top10_vacancies")
]
