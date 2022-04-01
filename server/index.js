import { connectDB } from './db.js'
import app from './app.js'

connectDB()

app.listen(3000)
console.log('server in running port', 3000)