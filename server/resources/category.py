from flask import Response, request, jsonify
from flask_restful import Resource,abort
from database.db import cursor, conn




class CategoriesApi(Resource):
    def get(self):
        cursor.execute("SELECT * FROM categories")
        results = cursor.fetchall()
        return jsonify(results)
    def post(self):
        body = request.get_json()
        title = body["title"]
        try:
            cursor.execute("INSERT INTO categories (title) VALUES(%s)",(title,))
            conn.commit()
            return {"body": body},200
        except:
            conn.rollback()
            print("already exists..")
            abort(403, error_message='This already exists')
        return last_id
    


class CategoryApi(Resource):
    def delete(self,id):
        cursor.execute("DELETE FROM categories WHERE id = %s",(id,))
        return '', 204




