import express, {Application} from 'express';
//Development
import morgan from 'morgan'

//Routes
import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/post.routes';
import UserRoutes from './routes/user.routes';

export class App {

    private app: Application;

    constructor(
        private port?: number | string
        ){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/posts', PostRoutes);
        this.app.use('/users', UserRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log(`[ + ] Servidor corriendo en puerto ${this.app.get('port')}`);
    }
}