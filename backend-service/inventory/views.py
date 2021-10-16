from rest_framework.decorators import api_view;
from rest_framework.response import Response;
from .serializers import InventorySerializer
from .models import Inventory

# Create your views here.

@api_view(["GET"])
def apiOverview(request):
    api_urls = {
        'List': 'inventory-list'
    }
    return Response(api_urls)

@api_view(["GET"])
def inventoryList(request):
    inventories = Inventory.objects.all()
    serialzer = InventorySerializer(inventories, many=True)
    return Response(serialzer.data);