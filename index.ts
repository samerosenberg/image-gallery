import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import multer from "multer";
import starterImages from "./images.json";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send(starterImages);
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },

    filename: function (req: any, file: any, cb: any) {
        cb(null, file.originalname);
    },
});
const fileFilter = (req: any, file: any, cb: any) => {
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png"
    ) {
        cb(null, true);
    } else {
        cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
    }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post("/upload", upload.single("photo"), (req: Request, res: Response) => {
    res.send("http://localhost:8000/" + req.file?.destination + "/" + req.file?.filename);
});

app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
