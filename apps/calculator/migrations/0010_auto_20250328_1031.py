# Generated by Django 3.2.25 on 2025-03-28 02:31

from django.db import migrations, models
from decimal import Decimal


class Migration(migrations.Migration):

    dependencies = [
        ('calculator', '0009_auto_20250328_1027'),
    ]

    operations = [
        # 直接在数据库层级删除非必要字段
        migrations.RunSQL(
            sql="""
            ALTER TABLE calculations 
            MODIFY COLUMN quantity INT DEFAULT 1,
            MODIFY COLUMN declared_value DECIMAL(10,2) DEFAULT 0.00,
            MODIFY COLUMN other_fees DECIMAL(10,2) DEFAULT 0.00,
            MODIFY COLUMN fuel_fee DECIMAL(10,2) DEFAULT 0.00,
            MODIFY COLUMN zone VARCHAR(10) NULL,
            MODIFY COLUMN remote_level VARCHAR(10) NULL,
            MODIFY COLUMN volume_weight DECIMAL(10,2) NULL,
            MODIFY COLUMN chargeable_weight DECIMAL(10,2) NULL;
            """,
            reverse_sql="""
            ALTER TABLE calculations 
            MODIFY COLUMN quantity INT NOT NULL,
            MODIFY COLUMN declared_value DECIMAL(10,2) NOT NULL,
            MODIFY COLUMN other_fees DECIMAL(10,2) NOT NULL,
            MODIFY COLUMN fuel_fee DECIMAL(10,2) NOT NULL;
            """
        ),
    ]
