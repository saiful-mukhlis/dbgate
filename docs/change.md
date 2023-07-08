
# modified:   package.json

```
"dbgate-serve": "node packages/serve/bin/dbgate-serve.js"
```


# modified:   packages/api/src/main.js

```js
// line 64
app.use(getExpressPath('/'), express.static(path.join(__dirname, '../../web/public')));
```