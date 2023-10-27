from django.db import models


class source(models.Model):
    class Meta:
        verbose_name_plural = "Data Sources"

    source_name = models.CharField(max_length=100, null=False)
    source_description = models.TextField(null=False)
    source_display_name = models.CharField(max_length=100, null=False)
    source_url = models.CharField(max_length=1000, blank=True)
    is_active = models.BooleanField(default=1)
    created_by = models.CharField(max_length=100, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.CharField(max_length=100, null=False)
    updated_date = models.DateTimeField(auto_now=True)


class language(models.Model):
    class Meta:
        verbose_name_plural = "Available Languages"

    language_name = models.CharField(max_length=100)
    language_display_name = models.CharField(max_length=100)

    language_code_alpha2 = models.CharField(max_length=10, default="N/A")
    language_code_alpha3_t = models.CharField(max_length=10, default="N/A")
    language_code_alpha3_b = models.CharField(max_length=10, default="N/A")

    is_active = models.BooleanField(default=1)
    created_by = models.CharField(max_length=100, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.CharField(max_length=100, null=False)
    updated_date = models.DateTimeField(auto_now=True)


class books(models.Model):
    class Meta:
        verbose_name_plural = "Books"

    book_name = models.CharField(max_length=100, null=False)
    book_description = models.TextField(null=False)
    book_display_name = models.CharField(max_length=100, null=False)
    language_id = models.ForeignKey(language, on_delete=models.CASCADE)
    source_id = models.ForeignKey(source, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=1)
    created_by = models.CharField(max_length=100, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.CharField(max_length=100, null=False)
    updated_date = models.DateTimeField(auto_now=True)


class chapters_of_books(models.Model):
    class Meta:
        verbose_name_plural = "Chapters of Books"

    chapter_name = models.CharField(max_length=100, null=False)
    chapter_description = models.TextField(null=False)
    chapter_display_name = models.CharField(max_length=100, null=False)
    book_id = models.ForeignKey(books, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=1)
    created_by = models.CharField(max_length=100, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.CharField(max_length=100, null=False)
    updated_date = models.DateTimeField(auto_now=True)


class verses_of_chapters(models.Model):
    class Meta:
        verbose_name_plural = "Verses of Chapters"

    verse_name = models.CharField(max_length=100, null=False)
    verse_pronounciation = models.TextField()
    verse_word_by_word = models.TextField()
    verse_translation = models.TextField()
    verse_commentary = models.TextField()
    chapter_id = models.ForeignKey(chapters_of_books, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=1)
    created_by = models.CharField(max_length=100, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.CharField(max_length=100, null=False)
    updated_date = models.DateTimeField(auto_now=True)
