import express from "express";

const app = express();
const PORT = 3250;

app.use(express.json());

app.use("/produtos", produtosRoutes);

app.listen(PORT, ()=>{
    console.log(`Rodando na porta http://localhost:${PORT}`);
});