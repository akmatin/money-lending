from django.db import models

# Create your models here.
class Ledger(models.Model):
    id = models.CharField(primary_key=True, max_length=10)
    date = models.CharField(max_length=20)
    items = models.CharField(max_length=50)
    grossWt = models.CharField(max_length=20)
    rate = models.CharField(max_length=20)
    date = models.CharField(max_length=20)
    roi = models.CharField(max_length=20)
    principal = models.CharField(max_length=20)
    interest = models.CharField(max_length=20)
    discount = models.CharField(max_length=20)
    months = models.CharField(max_length=20)
    isActive = models.BooleanField()
    comments = models.TextField()