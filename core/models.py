from django.db import models
from django.utils import timezone


class Category(models.Model):
    """
    Модель категорий
    """
    name = models.CharField(max_length=255, verbose_name="Название категории")
    slug = models.CharField(max_length=255, unique=True, verbose_name="Слаг")
    image = models.ImageField(verbose_name="Префью фото")


class Tag(models.Model):
    """
    Модель товарных тэгов
    """
    name = models.CharField(max_length=100, verbose_name="Название тэга")
    slug = models.CharField(max_length=100, unique=True, verbose_name="Слаг тэга")


class ProductTag(models.Model):
    """
    Модель связи товарных тэгов и товаров
    Связь: многие ко многим
    """
    product = models.ForeignKey('Product', on_delete=models.CASCADE, verbose_name='Товар')
    tag = models.ForeignKey('Tag', on_delete=models.CASCADE, verbose_name='Тэг')


class Promotion(models.Model):
    title = models.CharField(max_length=300, verbose_name="Заголовок акции")
    description = models.CharField(max_length=500, verbose_name="Описание акции")
    discount = models.IntegerField(verbose_name="Размер скидки")
    promocode = models.CharField(max_length=20, verbose_name="Промокод")
    image = models.ImageField(verbose_name="Превью акции")



class Product(models.Model):
    """
    Модель товара
    """
    name = models.CharField(max_length=100, verbose_name="Название товара")
    description = models.CharField(max_length=1000, verbose_name="Описание товара")
    price = models.DecimalField(max_digits=5, decimal_places=2, verbose_name="Цена")
    pub_date = models.DateTimeField(default=timezone.now, verbose_name="Дата публикации")
    promotion = models.ForeignKey('Promotion', on_delete=models.CASCADE, verbose_name='Акция')
    category = models.ForeignKey('Category', on_delete=models.CASCADE, verbose_name='Категория')
    image = models.ImageField(verbose_name="Изображение товара")