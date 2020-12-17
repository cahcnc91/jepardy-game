from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
from dao import QuestionDao
import mysql.connector

app = Flask(__name__)
CORS(app)

mysql_config = {
    'user': 'user',
    'password': 'password',
    'host': '127.0.0.1',
    'port': '3306',
    'database': 'jepardy'
}

db = mysql.connector.connect(**mysql_config)
if db.is_connected():
    print('connected to database')

question_dao = QuestionDao(db)


@app.route("/all-categories")
def index():
    history = question_dao.get_list("history")
    computer = question_dao.get_list("computer")
    tv = question_dao.get_list("tv")
    science = question_dao.get_list("science")
    general = question_dao.get_list("general")

    response = make_response(
        jsonify({"history": history, "computer": computer,
                 "tv": tv, "science": science, "general": general}),
        200,
    )
    return response


@app.route('/create', methods=['POST'])
def create():
    question_dao.add_question(request.json)
    return "true"


if __name__ == '__main__':
    # application will start listening for web request on port 5000
    app.run(port=5000, debug=True)
