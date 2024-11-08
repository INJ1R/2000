import mysql.connector

# Настройки подключения к базе данных
db_config = {
    'host': 'localhost',     # или ваш хост
    'user': 'root', # ваш пользователь
    'password': '1029384756Kolin', # ваш пароль
    'database': 'delena' # ваша база данных
}

# Устанавливаем соединение
try:
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    
    # Создаем SQL-запрос для вставки данных
    insert_query = "INSERT INTO delena (crop1, crop2) VALUES (%s, %s)"
    
    # Подготовка данных для вставки
    data_to_insert = []
    for i in range(2000):
        # Замените 'value1' и 'value2' на реальные значения в соответствии с вашей таблицей
        data_to_insert.append(('crop1{}'.format(i), 'crop2{}'.format(i)))
    
    # Вставка данных
    cursor.executemany(insert_query, data_to_insert)
    
    # Подтверждение изменений
    connection.commit()
    print("Успешно вставлено 2000 строк.")
    
except mysql.connector.Error as err:
    print("Ошибка: {}".format(err))
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
