const express = require('express')
const app = express()
const PORT = 3010

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server is Running")
})

app.post('/signup', (req,res)=>{
    const {Username,Email,Password,DateOfBirth} = req.body

    if(!Username||Username.trim()===''){
        return res.status(400).json({error:"Username cannot be Empty"})
    }
    if(!Email||Email.trim()===''){
        return res.status(400).json({error:"Email cannot be Empty"})
    }
    if(!Password||Password.length < 8 || Password.length > 16){
        return res.status(400).json({error:"Passward length should be greater than 8 or less than or equal to 16"})
    }

    console.log({Username,Email,Password,DateOfBirth})
    return res.status(200).json({message:"Signed up succesfully"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running in http://localhost:${PORT}`)
})