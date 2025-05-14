"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const storyRouter_1 = __importDefault(require("./routes/storyRouter"));
const contributorRouter_1 = __importDefault(require("./routes/contributorRouter"));
const morgan_1 = __importDefault(require("morgan"));
require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.use(cors({
//     origin: 'http://localhost:5173', // frontend URL
//     credentials: true
// }));
app.use((0, morgan_1.default)('combined'));
app.use('/api/user', userRouter_1.default);
app.use('/api/stories', storyRouter_1.default);
app.use('/api/contributors', contributorRouter_1.default);
const port = process.env.PORT || 3001;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('server is running on port ', port);
});
