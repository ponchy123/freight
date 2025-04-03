# Generated by Django 3.2.25 on 2025-03-26 01:41

from django.db import migrations
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('postal_codes', '0006_auto_20250326_0918'),
    ]

    operations = [
        # 使用RunSQL来运行原始SQL语句，更安全地修改表结构
        migrations.RunSQL(
            # 执行SQL
            """
            -- 修改zone_id字段，取消主键约束但保持唯一性
            ALTER TABLE zip_zones MODIFY zone_id VARCHAR(8) NOT NULL;
            ALTER TABLE zip_zones DROP PRIMARY KEY;
            ALTER TABLE zip_zones ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST;
            ALTER TABLE zip_zones ADD UNIQUE (zone_id);
            """,
            # 回滚SQL
            """
            ALTER TABLE zip_zones DROP COLUMN id;
            ALTER TABLE zip_zones DROP INDEX zone_id;
            ALTER TABLE zip_zones ADD PRIMARY KEY (zone_id);
            """
        ),
    ]
