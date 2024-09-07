##### Created server using middleware(using express)

```javascript
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in the another middlewaere");
  res.send("<h1>Hello World!");
});

app.listen(3000);
```

##### Simple server using express router

###### app.js

```javascript
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
```

###### admin.js

```javascript
const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action=product method=POST><input type="text" name="titile"><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
```

###### shop.js

```javascript
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

module.exports = router;
```
