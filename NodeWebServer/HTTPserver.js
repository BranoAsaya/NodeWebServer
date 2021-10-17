console.log("loading..");
const http = require("http");
const fs = require("fs");


const products = [
  {
    name: "jo",
    price: 125,
    img: "https://s.alicdn.com/@sc04/kf/HTB1GTBVKv5TBuNjSspmq6yDRVXar.jpg_220x220.jpg",
  },
  {
    name: "go",
    price: 155,
    img: "https://s.alicdn.com/@sc04/kf/H850446eb34b147a2a83acc8157365bc3y.jpg_220x220.jpg",
  },
  {
    name: "dc",
    price: 127,
    img: "https://s.alicdn.com/@sc04/kf/HTB1vkN.EDJYBeNjy1zeq6yhzVXa8.jpg_220x220.jpg",
  },
  {
    name: "er",
    price: 145,
    img: "https://s.alicdn.com/@sc04/kf/HTB1GTBVKv5TBuNjSspmq6yDRVXar.jpg_220x220.jpg",
  },
  {
    name: "po",
    price: 175,
    img: "https://s.alicdn.com/@sc04/kf/HTB1GTBVKv5TBuNjSspmq6yDRVXar.jpg_220x220.jpg",
  },
];
const productsJson=JSON.stringify(products)
console.log(productsJson);
const product = {
  name: "up",
  price: 111,
  img: "https://s.alicdn.com/@sc04/kf/HTB1Pi_4LXXXXXb2XpXXq6xXFXXX6.jpg_220x220.jpg",
};
const productJson=JSON.stringify(product)

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("public/HTML/index.html", "utf8", (err, data) => {
       
        if (err) {
          res.writeHead(404);
          res.write("wrong");
        } else {
          res.write(data);
        }
        
        res.end();
      });
      break;
    case "/about":
      fs.readFile("public/HTML/about.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("wrong");
        } else {
          res.writeHead(200,{"content-type":"text/html"});
          res.write(data);
        }
        res.end();
      });
      break;
      case "/CSS/style.css":
        fs.readFile('./public/CSS/style.css', "utf8", (err, data) => {
          if (err) {
            res.writeHead(404);
            res.write("wrong");
          } else {
            res.writeHead(200,{"content-type":"text/css"});
            res.write(data);
          }
          res.end();
        });
        break;
        case "/JS/main.js":
        fs.readFile('./public/JS/main.js', "utf8", (err, data) => {
          if (err) {
            res.writeHead(404);
            res.write("wrong");
          } else {
            res.writeHead(200,{"content-type":"text/javascript"});
            res.write(data);
          }
          res.end();
        });
        break;
            case "/sales":
      fs.readFile("public/HTML/sales.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("wrong");
        } else {
          res.write(data);
        }
        res.end();
      });
      break;
    case "/sales":
      fs.readFile("public/HTML/sales.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("wrong");
        } else {
          res.write(data);
        }
        res.end();
      });
      break;
    
    case "/products":
      res.write(productsJson);
      res.end();

      break;
    case "/product":
      res.write(productJson);
      res.end();
      break;
    default:
      res.writeHead(404);
      res.write("wrong");
      break;
  }
});
server.listen(2000);
