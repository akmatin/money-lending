from rest_framework.decorators import api_view;
from rest_framework.response import Response;
from .serializers import TransactionSerializer
from .models import Transaction

# Create your views here.

@api_view(["GET"])
def apiOverview(request):
    api_urls = {
        'List': 'transaction-list'
    }
    return Response(api_urls)

@api_view(["GET"])
def transactionList(request):
    transactions = Transaction.objects.all()
    serialzer = TransactionSerializer(transactions, many=True)
    return Response(serialzer.data);