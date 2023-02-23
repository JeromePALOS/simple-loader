# Simple Loader

![Loader demo](demo.gif)

## Install
```HTML
        <link href="simple-loader.css" rel="stylesheet">
        <script src="simple-loader.js"></script>
```


## Use

### Play

```JS
var load = new Loader();

```

### Stop

```JS
var load.stop();

```

### Time

```JS
var a = new Loader();
setTimeout(function(){
    a.stop();
}, 1000);

```