from django.shortcuts import render

# Create your views here.

def get_data(request):
    data = {
    'massage': 'json response',
    'status': 'success',
    'data': {
        'id': 1,
        'name': 'admin',
        'email': 'admin@admin.com'
    }
    },