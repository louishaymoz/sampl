from django.db import models

class Card(models.Model):
    title = models.CharField(max_length=200)
    image_url = models.URLField()
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.title

