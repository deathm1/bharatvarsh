# Generated by Django 4.1 on 2023-10-29 07:58

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("bharatarchive_api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="language",
            name="language_code_alpha2",
            field=models.CharField(default="N/A", max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name="language",
            name="language_code_alpha3_b",
            field=models.CharField(default="N/A", max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name="language",
            name="language_code_alpha3_t",
            field=models.CharField(default="N/A", max_length=10, null=True),
        ),
    ]
