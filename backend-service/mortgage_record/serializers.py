from rest_framework import serializers
from .models import MortgageRecord

class MortgageRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MortgageRecord
        fields = '__all__'