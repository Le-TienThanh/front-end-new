import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import exphbs from 'express-handlebars';
import Handlebars from 'handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import db from './config/db/index.js';
import methodOverride from 'method-override';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
// connect db
db.connect();

// app.use(morgan("combined"));

app.engine(
    'handlebars',
    engine({
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// them vao de lay ra duoc req.body
app.use(express.urlencoded());
app.use(express.json());
// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
