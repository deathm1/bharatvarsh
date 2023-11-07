import time
import json
from rest_framework.generics import ListAPIView
from django.core.exceptions import ValidationError
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response

from bharatarchive_api.api.serializers import (
    cms_tabs_serializer,
    cms_views_serializer,
    language_serializer,
    books_serializer,
)
from bharatarchive_api.models import cms_tabs, cms_views, language, books


class cms_tabs_list_view(ListAPIView):
    serializer_class = cms_tabs_serializer
    queryset = cms_tabs.objects.filter(is_active=True)


class cms_views_list_view(ListAPIView):
    serializer_class = cms_views_serializer
    queryset = cms_views.objects.all()


class language_list_view(ListAPIView):
    serializer_class = language_serializer
    queryset = language.objects.filter(is_active=True)


@api_view(["GET"])
def get_all_or_specific_books(request):
    current_language = request.GET.get("current_language")

    class Meta:
        ordering = ["id"]

    if current_language != None:
        get_language_id = language.objects.filter(language_code_alpha2=current_language)

        if len(get_language_id) != 0:
            found_book = list(
                books.objects.filter(
                    language_id=int(get_language_id[0].id), is_active=True
                ).values("book_display_name", "book_description")
            )

            return JsonResponse(
                {
                    "success": True,
                    "status": f"Fetched book by language.",
                    "book": found_book,
                    "timestamp": int(time.time() * 1000),
                },
                status=200,
            )
        else:
            return JsonResponse(
                {
                    "success": False,
                    "status": f"Sorry, currently we do not store data with this language code [{current_language}].",
                    "timestamp": int(time.time() * 1000),
                },
                status=404,
            )
    else:
        return JsonResponse(
            {
                "success": True,
                "status": f"Fetched all available books.",
                "book": list(
                    books.objects.filter(is_active=True).values(
                        "book_display_name", "book_description"
                    )
                ),
                "timestamp": int(time.time() * 1000),
            },
            status=200,
        )


# class get_all_or_specific_books(ListAPIView):
#     serializer_class = books_serializer

#     class Meta:
#         ordering = ["id"]

#     def get_queryset(self):
#         current_language = self.request.GET.get("current_language")
#         if current_language != None:
#             get_language_id = language.objects.filter(
#                 language_code_alpha2=current_language
#             )

#             if len(get_language_id) != 0:
#                 return books.objects.filter(
#                     language_id=int(get_language_id[0].id), is_active=True
#                 )
#         else:
#             return books.objects.filter(is_active=True)
