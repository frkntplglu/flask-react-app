from flask import Response, request, jsonify
from flask_restful import Resource, reqparse
from database.db import cursor, conn

parser = reqparse.RequestParser()

from helper import response
import json


class QuestionsApi(Resource):
    def get(self):
        cursor.execute("SELECT q.* , c.title as category, jsonb_agg(t) as tags , username FROM questions q LEFT JOIN question_tags qt ON q.id = qt.question_id LEFT JOIN tags t ON qt.tag_id = t.id LEFT JOIN categories c ON q.category_id = c.id LEFT JOIN users u ON q.user_id = u.id GROUP BY q.id, c.title, username")
        question_list = cursor.fetchall()
        return jsonify(question_list)
    
    # def post(self):SELECT * FROM questions INNER JOIN question_tags ON questions.id = question_tags.question_id INNER JOIN tags ON question_tags.tag_id = tags.id
    #     #parser.add_argument('quote', type=str)
    #     #args = parser.parse_args()
    #     body = request.get_json()
    #     user_id = body["user_id"]
    #     category_id = body["category_id"]
    #     question_title = body["question_title"]
    #     question_content = body["question_content"]
    #     cursor.execute("INSERT INTO questions (user_id, category_id, title, question_content) VALUES(%s %s %s %s)",(user_id, category_id, question_title, question_content))
    #     conn.commit()
    #     return body


class QuestionApi(Resource):
    def get(self, id):
        cursor.execute("SELECT q.* , c.title as category, jsonb_agg(t) as tags , username FROM questions q LEFT JOIN question_tags qt ON q.id = qt.question_id LEFT JOIN tags t ON qt.tag_id = t.id LEFT JOIN categories c ON q.category_id = c.id LEFT JOIN users u ON q.user_id = u.id  WHERE q.id = %s GROUP BY q.id, c.title, username", (id,))
        question = cursor.fetchone()
        # result = {}
        # result["id"] = question[0]
        # result["user_id"] = question[1]
        # result["category_id"] = question[2]
        # result["question_title"] = question[3]
        # result["question_content"] = question[4]
        # result["is_solved"] = question[5]
        # result["created_at"] = question[6]
        # result["updated_at"] = question[7]
        # result["category_name"] = question[8]
        # result["username"] = question[9]
        return jsonify(question)

    def put(self, id):
        pass

    def delete(self, id):
        pass


class QuestionsByID(Resource):
    def get(self, id):
        cursor.execute("SELECT  q.*, username, c.title FROM questions q JOIN users u ON q.user_id = u.id JOIN categories c ON q.category_id = c.id WHERE q.id = %s", (id,))
        question_list = cursor.fetchall()
        return jsonify(question_list)