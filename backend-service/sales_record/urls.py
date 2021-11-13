from django.urls import path
from . import views

#URLConf
urlpatterns = [
    path('list/', views.salesRecordList),
    path('create/', views.salesRecordCreate),
]