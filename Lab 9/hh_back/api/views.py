from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# GET all companies
@api_view(['GET'])
def get_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_company(request, id):
    try:
        company = Company.objects.get(id=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
def get_company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
    
    vacancies = company.vacancy_set.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    except Vacancy.DoesNotExist:
        return Response({"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_top10_vacancies(request):
    vacancies_top10 = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies_top10, many=True)
    return Response(serializer.data)