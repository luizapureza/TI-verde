import express from "express";
import empresaRouter from "./routes/Empresa.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/empresa",empresaRouter);

app.listen(PORT, () =>{
        logEvents(`Servidor está rodando corretamente na potra ${PORT}`,"listen.log");
});