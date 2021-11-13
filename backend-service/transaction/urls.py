from django.urls import path
from . import views

#URLConf
urlpatterns = [
    path('list/', views.transactionList),
]