# Generated by Django 3.2.9 on 2021-12-04 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_auto_20211204_0818'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='rating',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
