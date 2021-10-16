from django.db import models

# Create your models here.
class SalesRecord(models.Model):
    id = models.CharField(primary_key=True, max_length=10)
    cid = models.CharField(max_length=10)
    date = models.CharField(max_length=20)
    # address = models.CharField(max_length=50)
    # phoneNo = models.CharField(max_length=20)
    # linkedAccounts = models.CharField(max_length=200)