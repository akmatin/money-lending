from rest_framework.decorators import api_view;
from rest_framework.response import Response;
from .serializers import CustomerSerializer
from .models import Customer

# Create your views here.

@api_view(["GET"])
def apiOverview(request):
    api_urls = {
        'List': 'customer-list',
        'Create': 'customer-create'
    }
    return Response(api_urls)

@api_view(["GET"])
def customerList(request):
    customers = Customer.objects.all()
    serialzer = CustomerSerializer(customers, many=True)
    return Response(serialzer.data)

@api_view(["POST"])
def customerCreate(request):
    serializer = CustomerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
