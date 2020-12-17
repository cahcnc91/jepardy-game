from mysql.connector import errorcode
import mysql.connector
from datamock import lists

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

print('Conectando...')

mysql_config = {
    'user': 'user',
    'password': 'password',
    'host': '127.0.0.1',
    'port': '3306',
}

conn = mysql.connector.connect(**mysql_config)
if conn.is_connected():
    print('connected to database')


cursor = conn.cursor()


def create_database(cursor):
    try:
        cursor.execute(
            "CREATE DATABASE {} DEFAULT CHARACTER SET 'utf8'".format("jepardy"))
    except mysql.connector.Error as err:
        print("Failed creating database: {}".format(err))
        exit(1)


try:
    cursor.execute("USE {}".format("jepardy"))
except mysql.connector.Error as err:
    print()
    print("Database {} does not exists.".format("jepardy"))
    if err.errno == errorcode.ER_BAD_DB_ERROR:
        create_database(cursor)
        print("Database {} created successfully.".format("jepardy"))
        conn.database = "jepardy"
    else:
        print(err)
        exit(1)

# DROP EXISTING TABLE
try:
    print("Creating table {}: ".format("questions"), end='')
    cursor.execute(create_table)

        # INSERT QUESTIONS
    cursor.executemany(
        'INSERT INTO questions (question, category, answer, difficulty) VALUES (%s, %s, %s, %s)', lists)

    cursor.execute('select * from questions')

    for question in cursor.fetchall():
        print(question)

    conn.commit()
    
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
        print("already exists.")
    else:
        print(err.msg)
else:
    print("OK")


cursor.close()
conn.close()

# drop_table = "DROP TABLE questions;"
# cursor.execute(drop_table)
# conn.commit()

# cursor.execute(create_table)
# conn.commit()
