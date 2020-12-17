GET_LIST = "SELECT * FROM questions WHERE category = %s AND difficulty = %s ORDER BY RAND() LIMIT 1"
ADD_QUESTION = "INSERT INTO questions (question, category, answer, difficulty) VALUES (%s, %s, %s, %s)"


class QuestionDao:
    def __init__(self, db):
        self.__db = db

    def get_list(self, category):
        cursor = self.__db.cursor()
        cursor.execute(GET_LIST, (category, 100))
        difficultyOne = cursor.fetchall()
        cursor.execute(GET_LIST, (category, 200))
        difficultyTwo = cursor.fetchall()
        cursor.execute(GET_LIST, (category, 300))
        difficultyThree = cursor.fetchall()
        cursor.execute(GET_LIST, (category, 400))
        difficultyFour = cursor.fetchall()
        cursor.execute(GET_LIST, (category, 500))
        difficultyFive = cursor.fetchall()
        return translate_questions(difficultyOne + difficultyTwo + difficultyThree + difficultyFour + difficultyFive)

    def add_question(self, form):
        print(form)
        list = form.values()
        print(list)
        cursor = self.__db.cursor()
        cursor.execute(ADD_QUESTION, tuple(list),)


def translate_questions(questions):
    def create_question_with_tuple(tupla):

        return {'question': tupla[1], 'category': tupla[2],
                'answer': tupla[3], 'difficulty': tupla[4], 'id': tupla[0]}

    return list(map(create_question_with_tuple, questions))
