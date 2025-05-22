import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import route  from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

// app.use(morgan("combined"));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// them vao de lay ra duoc req.body
app.use(express.urlencoded());
app.use(express.json());
// routes init
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
