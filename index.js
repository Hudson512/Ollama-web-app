import mongodb from 'mongodb'
import dotenv from 'dotenv'
import app from './server.js'

dotenv.config()

const MongoClient = mongodb.MongoClient

// Construindo a URL de conexão com o formato correto
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.doxkl.mongodb.net/myDatabase?retryWrites=true&w=majority&authSource=admin`

const client = new MongoClient(url)
const port = process.env.PORT || 3000

async function startServer() {
  try {
    // Conectar ao MongoDB
    await client.connect()
    console.log('Successfully connected to MongoDB.')

    // Iniciar o servidor Express apenas após conectar ao MongoDB
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err)
    process.exit(1)
  }
}

startServer()

// Lidar com o encerramento gracioso
process.on('SIGINT', async () => {
  await client.close()
  process.exit(0)
})