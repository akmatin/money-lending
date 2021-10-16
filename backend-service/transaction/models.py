from django.db import models

# Create your models here.
class Transaction(models.Model):
    id = models.CharField(primary_key=True, max_length=10)
    transactionTypeId = models.CharField(max_length=20)
    amount = models.CharField(max_length=50)
    date = models.CharField(max_length=20)