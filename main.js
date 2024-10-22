import express from "express";

const app = express();

app.get('/' , (req, res) => {
    res.json({msg : "Hello students"});
});

const PORT = 6969;
app.listen(PORT, () => {
    console.log(`The server is running at port http://localhost:${PORT}`)
})
