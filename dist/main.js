import { Container } from "inversify";
import { MovieController } from "./controllers/movie.controller";
import { TYPES } from "./types";
import { UserService } from "./services/user.service";
import { App } from "./index";
import { MovieService } from "./services/movie.service";
const appContainer = new Container();
appContainer.bind(TYPES.MovieController).to(MovieController);
appContainer.bind(TYPES.UserService).to(UserService);
appContainer.bind(TYPES.MovieService).to(MovieService);
appContainer.bind(TYPES.Application).to(App);
const app = appContainer.get(TYPES.Application);
app.start();
export { app, appContainer };
