from django.urls import path

from .views import (
    AuthView,
    UserView
)

urlpatterns = [
    path('signup', AuthView.as_view()),
    path('signin', UserView.as_view()),
]