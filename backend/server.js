const express = require('express')
const app = express()


//Übergabe der JSON (Daten aus der Datenbnk sind hier JSON Test)
app.get("/123", (reg, res) =>{
    res.json({"test": ["test1", "test2", "test3", "test4", "test5"] })
})

//Port: App soll dem Server zuhören?  
app.listen(5000, () => {console.log("Server wurde auf Port 5000 gestartet")})

//Um server zu starten: npm start ins Terminal eingeben 
//In Browser öffnen mit http://localhost:5000/123; 123 ist damit mit der in App.get defienierten URL zu erstetzen 