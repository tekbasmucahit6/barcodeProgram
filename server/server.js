const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.get(("/"),(req,res) => {
    res.json({"status":"sunucu başarı ile oluşturuldu"});
} )

app.listen(5000, () => {
    console.log("sunucu başarı ile çalıştırıldı http://localhost:5000")
})