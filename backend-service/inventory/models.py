from django.db import models

# Create your models here.
class Inventory(models.Model):
    id = models.CharField(primary_key=True, max_length=10)
    metal = models.CharField(max_length=20)
    category = models.CharField(max_length=50)
    grossWt = models.CharField(max_length=20)
    netWt = models.CharField(max_length=20)
    bisNo = models.CharField(max_length=20)
    purity = models.CharField(max_length=20)
    purchaseRate = models.CharField(max_length=20)
    amount = models.CharField(max_length=20)
    date = models.CharField(max_length=20)