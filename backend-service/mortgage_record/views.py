from rest_framework.decorators import api_view;
from rest_framework.response import Response;
from .serializers import MortgageRecordSerializer
from .models import MortgageRecord

# Create your views here.

@api_view(["GET"])
def apiOverview(request):
    api_urls = {
        'List': 'mortgage-record-list'
    }
    return Response(api_urls)

@api_view(["GET"])
def mortgageRecordList(request):
    mortgageRecords = MortgageRecord.objects.all()
    serialzer = MortgageRecordSerializer(mortgageRecords, many=True)
    return Response(serialzer.data);