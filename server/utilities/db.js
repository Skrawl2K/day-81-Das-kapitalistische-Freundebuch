import { MongoClient } from "mongodb"

const url = process.env.MONGO_URI
const database = process.env.MONGO_DB

const client = new MongoClient(url)

let db // hier soll die connections zur mongo datenbank hespeichert werden

// die verbindung zur mongodb erfolgt asynchron -> wir arbeiten mit einem Promise
export const getDb = () => {
    return new Promise((resolve, reject) => {
        if (db) resolve(db) // -> wir prüfen ob wir schone eine Verbindung zur MongoDB haben
        client.connect()
            .then(() => {
                db = client.db(database)
                resolve(db)
            })
            .catch((err) => reject(err))
    })
}