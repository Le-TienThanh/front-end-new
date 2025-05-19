import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
app.use(morgan("combined"));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.render('home');
});
app.get("/news", (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
