from django.db import models

# Create your models here.
class SalesRecord(models.Model):
    id = models.CharField(primary_key=True, max_length=10)
    cid = models.CharField(max_length=10)
    date = models.CharField(max_length=20)
    inventoryId = models.CharField(max_length=20)
    makingCharges = models.IntegerField 
    gst = models.CharField(max_length=10)
    discountAmount = models.IntegerField
    subTotal = models.IntegerField()
    paid = models.IntegerField()
    isActive = models.BooleanField()
    comments = models.CharField(max_length=100)
    totalAmount = models.IntegerField()