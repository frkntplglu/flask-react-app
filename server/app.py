from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_restful import Api
from helper import response
from resources.routes import initialize_routes
from flask_cors import CORS
from flask_jwt_extended import JWTManager,get_jwt_claims


app = Flask(__name__)
app.config.from_envvar('ENV_FILE_LOCATION')

app.config['JSON_SORT_KEYS'] = False
# For Rest API
api = Api(app)

# For CORS 
CORS(app)

# For Hash
bcrypt = Bcrypt(app)

# For JWT
jwt = JWTManager(app)


initialize_routes(api)


@jwt.user_claims_loader
def add_claims_to_access_token(user):
    return {'roles': user['role']}

if(__name__ == "__main__"):
    app.run()

# # Execute a query
# cur.execute("SELECT * FROM my_data")

# # Retrieve query results
# records = cur.fetchall()

# @app.route('/api/auth/register')
# def create_user():
#     pass

# @app.route('/api/auth/login')
# def create_user():
#     pass

# @app.route('/api/hotquestions')
# def get_hot_questions():
#     pass

# @app.route('/api/hotauthors')
# def get_hot_authors():
#     pass

