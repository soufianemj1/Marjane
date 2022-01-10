const express = require("express");
const app = express();
app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use('/public', express.static('./public'));



const cors = require("cors");

const PORT = process.env.PORT || 8082;
app.use(cors())

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
require("./routes/routes")(app);

//connect
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});
