# Generated by Django 3.2.25 on 2025-03-25 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fuel_rates', '0005_data_migration'),
    ]

    operations = [
        migrations.RemoveIndex(
            model_name='fuelrate',
            name='fuel_rates_provide_579e01_idx',
        ),
        migrations.AddIndex(
            model_name='fuelrate',
            index=models.Index(fields=['provider'], name='fuel_rates_provider_idx'),
        ),
    ]
