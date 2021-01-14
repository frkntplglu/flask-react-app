from flask import Response, request, jsonify
from flask_restful import Resource
from database.db import cursor, conn


class PagesApi(Resource):
    def get(self):
        cursor.execute("SELECT * FROM pages")
        results = cursor.fetchall()
        return jsonify(results)
    def post(self):
        pass

class PageApi(Resource):
    def get(self,id):
        cursor.execute("SELECT * FROM pages WHERE id = %s", (id,))
        results = cursor.fetchall()
        return jsonify(results)
    def post(self):
        pass

