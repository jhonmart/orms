import app from './app.js'
import { sequelize } from './database/sequelize.js'

const PORT = 3000

async function start() {
  try {
    await sequelize.authenticate()

    console.log('Banco conectado')

    await sequelize.sync()

    console.log('Tabelas sincronizadas')

    app.listen(PORT, () => {
      console.log(`Servidor iniciado na porta ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
