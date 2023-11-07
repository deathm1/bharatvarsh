from django.urls import path

from bharatarchive_api.api.views import (
    cms_tabs_list_view,
    cms_views_list_view,
    language_list_view,
    get_all_or_specific_books,
)

urlpatterns = [
    path("getAllTabs", cms_tabs_list_view.as_view(), name="get_all_tabs_as_list_view"),
    path("getWebsiteView", cms_views_list_view.as_view(), name="get_website_view"),
    path(
        "getAvailableLanguages",
        language_list_view.as_view(),
        name="get_available_languages_view",
    ),
    path(
        "getAllOrSpecificBooks",
        get_all_or_specific_books,
        name="get_all_or_specific_books",
    ),
]
