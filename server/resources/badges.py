from flask import Response, request, jsonify
from flask_restful import Resource
from database.db import cursor, conn


class BadgesApi(Resource):
    def get(self):
        cursor.execute("SELECT * FROM badges")
        results = cursor.fetchall()
        return jsonify(results)
    def post(self):
        body = request.get_json()
        title = body["title"]
        cursor.execute("INSERT INTO badges (title) VALUES(%s)",(title,))
        conn.commit()
        return {"body": body},200


class BadgeApi(Resource):
    def delete(self,id):
        cursor.execute("DELETE FROM badges WHERE id = %s",(id,))
        return '', 204

