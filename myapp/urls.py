from django.urls import path
from . import views
from django.conf import settings
from myapp import views  
from .views import Logout
from django.conf.urls.static import static 

urlpatterns = [
    path('', views.Signup, name='signup'),
    path('login/', views.Login, name='login'),
    path('logout/', views.Logout, name='logout'),

    path('home/', views.Home, name='home'),
    path('quiz/', views.Quiz, name='quiz'),
    path('result/', views.Result, name='result'),
    path('history/', views.History, name='history'),

]
if settings.DEBUG :
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)