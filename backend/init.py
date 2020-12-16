from flask import Flask, jsonify, make_response
from flask_cors import CORS
from flask_mysqldb import MySQL
from datamock import history_data, computer_data

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'user'
app.config['MYSQL_PASSWORD'] = 'password'

mysql = MySQL(app)

cursor = mysql.connection.cursor()


class Questions:
    def __init__(self, question, difficulty, answer):
        self.question = question
        self.difficulty = difficulty
        self.answer = answer


@app.route("/all-categories")
def index():
    response = make_response(
        jsonify(
            {"history": history_data, "computer": computer_data}
        ),
        200,
    )
    return response


if __name__ == '__main__':
    # application will start listening for web request on port 5000
    app.run(port=5000, debug=True)
