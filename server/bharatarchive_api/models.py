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

    language_name = models.CharField(max_length=100, null=False)
    language_display_name = models.CharField(max_length=100, null=False)

    language_code_alpha2 = models.CharField(max_length=10, default="N/A", null=True)
    language_code_alpha3_t = models.CharField(max_length=10, default="N/A", null=True)
    language_code_alpha3_b = models.CharField(max_length=10, default="N/A", null=True)

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

class cms_views(models.Model):
    class Meta:
        verbose_name_plural = "Content Management System Website Views"
    website_name = models.CharField(max_length=25, null=False)
    footer_text = models.CharField(max_length=200, null=False)
    change_theme_tooltip = models.CharField(max_length=50, null=False)
    menu_tooltip = models.CharField(max_length=50, null=False)
    logo_tooltip = models.CharField(max_length=50, null=False)
    created_by = models.CharField(max_length=100, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.CharField(max_length=100, null=False)
    updated_date = models.DateTimeField(auto_now=True)

class cms_tabs(models.Model):
    class Meta:
        verbose_name_plural = "Content Management System Website Tabs"
    tab_name = models.CharField(max_length=25, null=False)
    tab_dsiplay_name = models.CharField(max_length=25, null=False)
    tab_endpoint = models.CharField(max_length=200, null=False)
    is_active = models.BooleanField(default=1)
    created_by = models.CharField(max_length=100, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.CharField(max_length=100, null=False)
    updated_date = models.DateTimeField(auto_now=True) 
