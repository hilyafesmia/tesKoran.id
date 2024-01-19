from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import AuthenticationFailed, InvalidToken
from rest_framework_simplejwt.settings import api_settings
from django.utils.translation import gettext_lazy as _

# Enable inactive user to authenticate


class CustomTokenStrategy:
    @classmethod
    def obtain(cls, user):
        from rest_framework_simplejwt.tokens import RefreshToken
        from six import text_type

        refresh = RefreshToken.for_user(user)
        refresh['username'] = user.username
        access = refresh.access_token
        access['username'] = user.username

        return {
            "refresh": text_type(refresh),
            "access": text_type(refresh.access_token),
        }



class CustomJWTAuthentication(JWTAuthentication):
    def get_user(self, validated_token):
        """
        Attempts to find and return a user using the given validated token.
        """
        try:
            user_id = validated_token[api_settings.USER_ID_CLAIM]
        except KeyError:
            raise InvalidToken(
                _('Token contained no recognizable user identification'))

        try:
            user = self.user_model.objects.get(
                **{api_settings.USER_ID_FIELD: user_id})
        except self.user_model.DoesNotExist:
            raise AuthenticationFailed(
                _('User not found'), code='user_not_found')

        return user


def custom_user_authentication_rule(user):
    return user is not None
