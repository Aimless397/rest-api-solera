import dotenv from 'dotenv'

dotenv.config()

import app from './app'

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running at port ${port}...`)
})
