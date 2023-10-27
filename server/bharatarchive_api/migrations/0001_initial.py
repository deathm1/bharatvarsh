# Generated by Django 4.2.6 on 2023-10-27 09:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="books",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("book_name", models.CharField(max_length=100)),
                ("book_description", models.TextField()),
                ("book_display_name", models.CharField(max_length=100)),
                ("is_active", models.BooleanField(default=1)),
                ("created_by", models.CharField(max_length=100)),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("updated_by", models.CharField(max_length=100)),
                ("updated_date", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name_plural": "Books",
            },
        ),
        migrations.CreateModel(
            name="chapters_of_books",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("chapter_name", models.CharField(max_length=100)),
                ("chapter_description", models.TextField()),
                ("chapter_display_name", models.CharField(max_length=100)),
                ("is_active", models.BooleanField(default=1)),
                ("created_by", models.CharField(max_length=100)),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("updated_by", models.CharField(max_length=100)),
                ("updated_date", models.DateTimeField(auto_now=True)),
                (
                    "book_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="bharatarchive_api.books",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Chapters of Books",
            },
        ),
        migrations.CreateModel(
            name="language",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("language_name", models.CharField(max_length=100)),
                ("language_display_name", models.CharField(max_length=100)),
                (
                    "language_code_alpha2",
                    models.CharField(default="N/A", max_length=10),
                ),
                (
                    "language_code_alpha3_t",
                    models.CharField(default="N/A", max_length=10),
                ),
                (
                    "language_code_alpha3_b",
                    models.CharField(default="N/A", max_length=10),
                ),
                ("is_active", models.BooleanField(default=1)),
                ("created_by", models.CharField(max_length=100)),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("updated_by", models.CharField(max_length=100)),
                ("updated_date", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name_plural": "Available Languages",
            },
        ),
        migrations.CreateModel(
            name="source",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("source_name", models.CharField(max_length=100)),
                ("source_description", models.TextField()),
                ("source_display_name", models.CharField(max_length=100)),
                ("source_url", models.CharField(blank=True, max_length=1000)),
                ("is_active", models.BooleanField(default=1)),
                ("created_by", models.CharField(max_length=100)),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("updated_by", models.CharField(max_length=100)),
                ("updated_date", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name_plural": "Data Sources",
            },
        ),
        migrations.CreateModel(
            name="verses_of_chapters",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("verse_name", models.CharField(max_length=100)),
                ("verse_pronounciation", models.TextField()),
                ("verse_word_by_word", models.TextField()),
                ("verse_translation", models.TextField()),
                ("verse_commentary", models.TextField()),
                ("is_active", models.BooleanField(default=1)),
                ("created_by", models.CharField(max_length=100)),
                ("created_date", models.DateTimeField(auto_now_add=True)),
                ("updated_by", models.CharField(max_length=100)),
                ("updated_date", models.DateTimeField(auto_now=True)),
                (
                    "chapter_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="bharatarchive_api.chapters_of_books",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Verses of Chapters",
            },
        ),
        migrations.AddField(
            model_name="books",
            name="language_id",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="bharatarchive_api.language",
            ),
        ),
        migrations.AddField(
            model_name="books",
            name="source_id",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="bharatarchive_api.source",
            ),
        ),
    ]
