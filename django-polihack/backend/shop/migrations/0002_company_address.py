# Generated by Django 3.2.9 on 2021-12-04 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='address',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
