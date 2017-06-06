from django.template.response import TemplateResponse
from django import forms
from django import http

import datetime

class NameForm (forms.Form):
  your_name = forms.CharField(label="Your Name", max_length=100)
  
def homepage (request):
  context = {
    'page_title2': 'HOME PAGE',
    'name': 'John Madden',
    'now': datetime.datetime.now(),
    'numbers': [1, 2, 3, 4]
  }
  return TemplateResponse(request, 'homepage.html', context)
  
def hello (request):
  form = NameForm(request.POST or None)
  
  if request.method == 'POST':
    if form.is_valid():
      send_email()
      return http.HttpResponseRedirect('/thanks/')
    
  context = {
    'form': form
  }
  return TemplateResponse(request, 'hello.html', context)
  