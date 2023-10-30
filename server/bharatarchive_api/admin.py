from django.contrib import admin
from bharatarchive_api.models import *

# Register your models here.


class source_admin(admin.ModelAdmin):
    list_display = [
        "source_name",
        "source_description",
        "source_display_name",
        "source_url",
        "is_active",
        "created_date",
        "created_by",
        "updated_date",
        "updated_by",
    ]


admin.site.register(source, source_admin)


class language_admin(admin.ModelAdmin):
    list_display = [
        "language_name",
        "language_code_alpha2",
        "language_display_name",
        "is_active",
        "created_date"
    ]


admin.site.register(language, language_admin)


class books_admin(admin.ModelAdmin):
    list_display = [
        "book_name",
        "book_description",
        "book_display_name",
        "language_id",
        "source_id",
        "is_active",
        "created_date",
        "created_by",
        "updated_date",
        "updated_by",
    ]


admin.site.register(books, books_admin)


class chapters_of_books_admin(admin.ModelAdmin):
    list_display = [
        "chapter_name",
        "chapter_description",
        "chapter_display_name",
        "book_id",
        "is_active",
        "created_date",
        "created_by",
        "updated_date",
        "updated_by",
    ]


admin.site.register(chapters_of_books, chapters_of_books_admin)


class verses_of_chapters_admin(admin.ModelAdmin):
    list_display = [
        "verse_name",
        "verse_pronounciation",
        "verse_word_by_word",
        "verse_translation",
        "verse_commentary",
        "chapter_id",
        "is_active",
        "created_date",
        "created_by",
        "updated_date",
        "updated_by",
    ]


admin.site.register(verses_of_chapters, verses_of_chapters_admin)


class cms_views_admin(admin.ModelAdmin):
    list_display = [
        "website_name",
        "footer_text",
        "change_theme_tooltip",
        "menu_tooltip",
        "logo_tooltip",
        "created_date",
        "created_by",
        "updated_date",
        "updated_by",
    ]


admin.site.register(cms_views, cms_views_admin)


class cms_tabs_admin(admin.ModelAdmin):
    list_display = [
        "tab_name",
        "tab_dsiplay_name",
        "tab_endpoint",
        "is_active",
        "created_date",
        "created_by",
        "updated_date",
        "updated_by",
    ]


admin.site.register(cms_tabs, cms_tabs_admin)
