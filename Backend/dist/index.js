import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get('/', (req, res) => {
    res.status(202).json({
        status: 'success',
        timestamp: new Date().toISOString()
    });
});
app.listen(3000, () => {
    console.log('The server is running fine');
});
//# sourceMappingURL=index.js.map