from rest_framework import serializers

from bharatarchive_api.models import cms_tabs, cms_views, language, books


class cms_tabs_serializer(serializers.ModelSerializer):
    class Meta:
        model = cms_tabs
        fields = ["tab_dsiplay_name", "tab_endpoint"]


class books_serializer(serializers.ModelSerializer):
    class Meta:
        model = books
        fields = ["book_display_name", "book_description"]


class cms_views_serializer(serializers.ModelSerializer):
    class Meta:
        model = cms_views
        fields = [
            "website_name",
            "footer_text",
            "change_theme_tooltip",
            "menu_tooltip",
            "logo_tooltip",
        ]


class language_serializer(serializers.ModelSerializer):
    class Meta:
        model = language
        fields = [
            "language_display_name",
            "language_code_alpha2",
            "language_code_alpha3_b",
            "language_code_alpha3_t",
        ]
