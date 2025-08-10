import express from "express"
import bodyParser from "body-parser";
import {dirname} from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000;
let blogs = [];
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true })); 

// implementing the home page 
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create",(req,res)=>{
   res.sendFile(__dirname + "/public/create.html")

})
app.post("/post",(req,res)=>{
//    this is working as it expected but the issue now is that it is being overridden everytime I make a new entry which is not convenient. 

// so the next step is to make a array/list which would contain the title, subtitle, and append the new entry everytime when a new blog is created. 
   let data = {
    title: req.body.title,
    subtitle: req.body.subtitle
   }
   blogs.push(data);
    res.render("index.ejs", {
        blogs
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
