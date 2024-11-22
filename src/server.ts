import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT as string;

const app: Application = express();


app.get('/', (req: Request, res: Response) => {
    res.send(`server running on port: ${port}`);
});

app.get('/users', (req: Request, res: Response) => {
    res.status(200).json(
        [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }, { id: 3, name: 'John Smith' }]
    );

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});