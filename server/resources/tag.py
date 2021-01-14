from flask import Response, request, jsonify
from flask_restful import Resource
from database.db import cursor, conn


class TagsApi(Resource):
    def get(self):
        cursor.execute("SELECT * FROM tags")
        results = cursor.fetchall()
        return jsonify(results)
    def post(self):
        body = request.get_json()
        title = body["title"]
        cursor.execute("INSERT INTO tags (title) VALUES(%s)",(title,))
        conn.commit()
        return {"body": body}




class TagApi(Resource):
    def delete(self,id):
        cursor.execute("DELETE FROM tags WHERE id = %s",(id,))
        return '', 204
