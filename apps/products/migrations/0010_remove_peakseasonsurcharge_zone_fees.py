# Generated by Django 3.2.25 on 2025-03-21 05:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_auto_20250321_1304'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='peakseasonsurcharge',
            name='zone_fees',
        ),
    ]
