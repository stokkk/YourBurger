from django.contrib import admin
from core.models import *


admin.site.register(Product)
admin.site.register(Promotion)
admin.site.register(Tag)
admin.site.register(ProductTag)
admin.site.register(Category)