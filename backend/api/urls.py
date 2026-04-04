from rest_framework import routers
from .views import CardViewSet

router = routers.DefaultRouter()
router.register(r'cards', CardViewSet)

urlpatterns = router.urls