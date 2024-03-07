import express from "express";
import cors from"cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js"
import{db} from './connect.js';

const app=express();

app.use(express.json()) 
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(cookieParser());
  
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.json("this is backend")
})

app.get("/:brand",(req,res)=>{
    const brand = req.params.brand;
    const q = `SELECT * FROM ${brand}`;
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});
app.post("/:brand", (req, res) => {
    const brand = req.params.brand;
    const q = `INSERT INTO ${brand} (product_id, name, category, in_stock, buy_price, sell_price) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
        req.body.product_id,
        req.body.name,
        req.body.category,
        req.body.in_stock,
        req.body.buy_price,
        req.body.sell_price
    ];

    console.log("Received request for brand:", brand);
    console.log("Request body:", req.body);
    console.log("SQL query:", q);
    console.log("Values:", values);

    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Error inserting into database:", err);
            return res.status(500).json({ error: "An error occurred while adding the product." });
        }
        return res.json("Product has been created successfully");
    });
});


app.delete("/:brand/:id", (req, res) => {
    const brand = req.params.brand;
    const stockId = req.params.id;
    const q = `DELETE FROM ${brand} WHERE product_id=?`;
    db.query(q, [stockId], (err, data) => {
        if (err) {
            console.error("Error deleting from database:", err);
            return res.status(500).json({ error: "An error occurred while deleting the book." });
        }
        return res.status(200).json({ message: "Book has been deleted successfully." });
    });
});


app.put("/:brand/:id", (req, res) => {
    const brand = req.params.brand;
    const stockId = req.params.id;
    const q = `UPDATE ${brand} SET 
        product_id=?, 
        name=?, 
        category=?, 
        in_stock=?, 
        buy_price=?, 
        sell_price=?
        WHERE product_id=?`;
    const values = [
        req.body.product_id,
        req.body.name,
        req.body.category,
        req.body.in_stock,
        req.body.buy_price,
        req.body.sell_price,
        stockId
    ];
    db.query(q, values, (err, data) => {
        if (err) {
            console.error(`Error updating the product in ${brand}:`, err);
            return res.status(500).json({ error: "An error occurred while updating the product." });
        }
        return res.status(200).json({ message: "Product has been updated successfully." });
    });
});


app.listen(8800,()=>{
    console.log("connected to backend");
})