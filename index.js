const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
app.use(express.json()) // => req.body
const route = require("./route")
app.use('/api', route);

app.listen(PORT, () => {
console.log(`Server is started on port ${PORT}.`);
});