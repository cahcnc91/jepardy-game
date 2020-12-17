GET_LIST = "SELECT * FROM questions WHERE category = %s"


class QuestionDao:
    def __init__(self, db):
        self.__db = db

    def get_list(self, category):
        cursor = self.__db.cursor()
        cursor.execute(GET_LIST, (category,))
        return translate_questions(cursor.fetchall())


def translate_questions(questions):
    def create_question_with_tuple(tupla):

        return {'question': tupla[1], 'category': tupla[2],
               'answer': tupla[3], 'difficulty': tupla[4], 'id': tupla[0]}

    return list(map(create_question_with_tuple, questions))
