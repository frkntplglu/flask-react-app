from .question import QuestionsApi, QuestionApi
# from .answer import AnswersApi, AnswerApi
from .tag import TagsApi, TagApi
from .badges import BadgesApi,BadgeApi
from .pages import PagesApi,PageApi
from .category import CategoriesApi,CategoryApi
from .user import SignupApi, LoginApi
# from .user import UsersApi, UserApi

def initialize_routes(api):
    api.add_resource(QuestionsApi,'/api/questions/')
    api.add_resource(QuestionApi,'/api/question/<id>')
    #api.add_resource(QuestionsByUserApi,'/api/questions/user/<id>')

    # api.add_resource(CategoriesApi,'/api/categories')
    # api.add_resource(CategoryApi,'/api/category/<id>')

    # api.add_resource(AnswersApi,'/api/answers/<question_id>')
    # api.add_resource(AnswerApi,'/api/answer/<id>')

    api.add_resource(TagsApi,'/api/tags/')
    api.add_resource(TagApi,'/api/tag/<id>')

    api.add_resource(BadgesApi,'/api/badges/')
    api.add_resource(BadgeApi,'/api/badge/<id>')

    api.add_resource(CategoriesApi,'/api/categories/')
    api.add_resource(CategoryApi,'/api/category/<id>')

    api.add_resource(PagesApi,'/api/pages/')
    api.add_resource(PageApi,'/api/page/<id>')

    # api.add_resource(UsersApi,'/api/users/')
    # api.add_resource(UserApi,'/api/user/<id>')

    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')

