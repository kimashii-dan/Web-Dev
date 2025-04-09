from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=225)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company_id = serializers.IntegerField()
    company_name = serializers.CharField(source='company.name', read_only=True)

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)
