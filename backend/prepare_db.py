import mysql.connector
from datamock import lists

print('Conectando...')

mysql_config = {
    'user': 'user',
    'password': 'password',
    'host': '127.0.0.1',
    'port': '3306',
    'database': 'jepardy'
}


conn = mysql.connector.connect(**mysql_config)
if conn.is_connected():
    print('connected to database')


cursor = conn.cursor()

# DROP EXISTING TABLE
drop_table = "DROP TABLE questions;"
cursor.execute(drop_table)
conn.commit()

# CREATE NEW TABLE
create_table = '''
    CREATE TABLE questions (
        id int(11) NOT NULL AUTO_INCREMENT,
        question varchar(400) NOT NULL,
        category varchar(40) NOT NULL,
        answer varchar(400) NOT NULL,
        difficulty int NOT NULL,
        PRIMARY KEY (id)
    );'''

cursor.execute(create_table)
conn.commit()

# INSERT QUESTIONS
cursor.executemany(
    'INSERT INTO questions (question, category, answer, difficulty) VALUES (%s, %s, %s, %s)', lists)

cursor.execute('select * from questions')

for question in cursor.fetchall():
    print(question)

conn.commit()

cursor.close()
conn.close()
