const database = require('../util/database');
module.exports = class Comment{
    constructor(name, email, comment) {
        this.name = name;
        this.email = email;
        this.comment = comment;
    }

    save(){
       return database.execute('INSERT INTO comments (name, email, comment) VALUES (?, ?, ?)',
        [this.name, this.email, this.comment]);

    }

    static fetchAll(){
     return database.execute('SELECT * FROM comments');

    }
};