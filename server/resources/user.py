from flask import Response, request, jsonify
from flask_restful import Resource,abort
from database.db import cursor, conn
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
import datetime



import json


def hash_password(password):
    return generate_password_hash(password).decode('utf8')

def check_password(dbpassword, givenpassword):
    return check_password_hash(dbpassword, givenpassword)

class SignupApi(Resource):
    def post(self):
        body = request.get_json()
        username = body["username"]
        password = hash_password(body["password"])
        email = body["email"]
        cursor.execute("INSERT INTO users (username, user_password, email, user_point, badge_id) VALUES(%s, %s, %s, %s, %s)",(username, password, email, 1000, 1))
        conn.commit()
        return {"username": username, "password": password, "email": email},200

class LoginApi(Resource):
    def post(self):
        body = request.get_json()
        username = body["username"]
        givenpassword = body["password"]
        cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
        user = cursor.fetchone()
        user_obj = {'id': user['id'], 'role': 'admin' if user['is_admin'] else 'normal'}
        authorized = check_password(user["user_password"], givenpassword)
        print(user_obj)
        if not authorized:
            return {'error': 'Email or password invalid'}, 401
        expires = datetime.timedelta(days=7)
        access_token = create_access_token(identity=user_obj, expires_delta=expires)
        return {'token': access_token,'username': user["username"], }, 200
        

        