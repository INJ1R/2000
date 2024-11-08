const mysql = require('mysql');;

// Настройки подключения
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '1029384756Kolin',
    database: 'DELENA'
};

const connection = mysql.createConnection(dbConfig);

const insertBooks = () => {
    const insertQuery = "INSERT INTO books (title, author, genre, year) VALUES ?";
    const data = [];

    // Примеры данных
    const titles = [];
    for (let i = 1; i <= 200; i++) {
        titles.push(`Книга ${i}`);
    }
    const authors = ["Автор A", "Автор B", "Автор C", "Автор D", "Автор E"];
    const genres = ["Фантастика", "Мистика", "Научная фантастика", "Драма", "Приключения"];

    for (let i = 0; i < 2000; i++) {
        const title = titles[Math.floor(Math.random() * titles.length)];
        const author = authors[Math.floor(Math.random() * authors.length)];
        const genre = genres[Math.floor(Math.random() * genres.length)];
        const year = Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900;
        data.push([title, author, genre, year]);
    }

    connection.query(insertQuery, [data], (error) => {
        if (error) throw error;
        console.log("2000 строк успешно добавлены в таблицу 'books'.");
        connection.end(); // Закрыть соединение
    });
};

// Подключение к базе данных и выполнение вставки
connection.connect((err) => {
    if (err) throw err;
    console.log('Подключено к базе данных.');
    insertBooks();
});
