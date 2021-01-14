from flask import Response, request
from flask_restful import Resource

class AnswersApi(Resource):
    def get(self, question_id):
        pass

    def post(self, question_id):
        pass


class AnswerApi(Resource):
    def put(self, id):
        pass

    def delete(self, id):
        pass

