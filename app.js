import express from 'express'
import cors from 'cors'
import {getSuspects, getSuspect, addSuspect} from './model/supabase.js'
const app = express()
const port = 3002

app.use(cors())
app.use(express.json())

app.get('/api/v1', async (req, res) => {
    const {data, error} = await getSuspects()
    res.json(data)
})

app.get('/api/v1/suspect', async (req, res) => {

    const id = req.query.id
    const {data, error} = await getSuspect(id)
    res.json(data)
})

app.post('/api/v1/suspect', async (req,res)=>{

const{data,error} = await addSuspect(req.body)
res.json(data)


})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
