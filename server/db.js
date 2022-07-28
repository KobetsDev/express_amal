const mongoose = require('mongoose');
let password = "tsHhnYhkIVy3yxxu"
let client_str = `mongodb+srv://tg_bot:${password}@cluster0.7r2wk.mongodb.net/?retryWrites=true&w=majority`

var conn;
async function connect() {
    conn = await mongoose.createConnection(client_str).asPromise();
    conn.readyState;
    console.log(conn);
    return conn;
}

connect()
module.exports = conn;