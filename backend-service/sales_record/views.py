from rest_framework.decorators import api_view;
from rest_framework.response import Response;
from .serializers import SalesRecordSerializer
from .models import SalesRecord

# Create your views here.
@api_view(["GET"])
def apiOverview(request):
    api_urls = {
        'List': 'sales-record-list',
        'Create': 'sales-record-create'
    }
    return Response(api_urls)

@api_view(["GET"])
def salesRecordList(request):
    salesRecords = SalesRecord.objects.all()
    serialzer = SalesRecordSerializer(salesRecords, many=True)
    return Response(serialzer.data);

@api_view(["POST"])
def salesRecordCreate(request):
    serializer = SalesRecordSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
