from django.template.response import TemplateResponse
from django.shortcuts import get_object_or_404

from blog.models import Blog, Post

def blog_index (request, blog_slug):
  blog = get_object_or_404(Blog, slug=blog_slug)
  posts = Post.objects.filter(blog=blog)
  
  tag = request.GET.get('tag', '')
  if tag:
    posts = posts.filter(tags__slug=tag)
    
  context = {
    'blog': blog,
    'posts': posts,
  }
  
  return TemplateResponse(request, 'blog.html', context)
  
def blog_post (request, blog_slug, post_slug):
  context = {
    'post': get_object_or_404(Post, 
        slug=post_slug, blog__slug=blog_slug),
  }
  
  return TemplateResponse(request, 'blog_post.html', context)
  