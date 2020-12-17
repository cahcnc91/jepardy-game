from flask import Flask, jsonify, make_response
from flask_cors import CORS
from datamock import computer_data
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
    response = make_response(
        jsonify({"history": history}),
        200,
    )
    return response


if __name__ == '__main__':
    # application will start listening for web request on port 5000
    app.run(port=5000, debug=True)
