// app.js
const express = require('express');
const app = express();
const excelToJson = require('convert-excel-to-json');
const path = require('path');
const cors = require('cors')

app.use(cors())
const port = 5500

// Endpoint para leer el archivo Excel
app.get('/api/excel-data', (req, res) => {
  const result = excelToJson({
    sourceFile: path.join(__dirname, './d.xlsx') // Ruta al archivo Excel
  });

  // Supongamos que la hoja de Excel se llama 'Sheet1'
  const data = result.Sheet1;

  res.json(data);
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
