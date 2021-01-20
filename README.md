# javascript-intro-examples
Im working through a video course introduction. Im documenting my progress here and will store my own examples.

**use Setup Browser Sync**
* Install node
* Install npm
* Install browser sync

```powershell 
npm install -g browser-sync
browser-sync --version
```

## Hello World
```powershell
    browser-sync start -s src -f src -b "google chrome" --no-notify
```

* zen coding > emmett.io: cheatsheet! 

## What is html5? 
- Look at the small tag. Differences are explained there. 
- Look at the spec
- 4 vs 5: All tags are meaningful. 4 was just about nice display. Semantic meaning

## Document vs. window

- Treelike structure -> DOM
- Embedded in the Window Object
- Window: self, document, window are usable 
- scripttag at the end of the page. (scripttag will block the browser rendering)

```html
<html>
<head>
    <title>hello world</title>
</head>
<body>
    <div>hello world!</div>
    <script src="app.js"></script>
</body>
</html>
```

```javascript
    console.log("hello dom"); 
    console.log(window); //ToString() of the Window
    console.log(window);
    console.log(window.document === document);
    console.log(window === self);
    console.log(document.lastModified);
    console.log(document.defaultView === window);
    console.log(document.title);
    console.log(document.body)
```

Change the content of the body / dynamically change the content of the dom

```javascript
document.body.innerHTML = "<h1>hey dom</>";
```

Window Methods: 
```javascript
console.log(window.screen);
```

## Console 

* an Object on window
```javascript
console.log(window.console === console);
```

Output an Object:
```javascript
let test = {name:"testname"}
console.log(test);
console.log(console);
```

Different log levels: 
```javascript
    console.debug("debug");
    console.info("info");
    console.warn("warn");
    console.error("error");
```
Groupings:
```javascript
    console.group();
    console.log("test1");
    console.log("test2");
    console.groupEnd();
```

Time Stamps:
```javascript
    console.time("logging");
    console.log("test")
    console.timeEnd("logging");
```

profiling and traces:
```javascript
    console.profile("log");
    console.log("test");
    console.profileEnd("log");
    console.trace();
```

## Dom in the browser: 

```javascript
let divs =  document.getElementsByTagName("div");
let div = divs.item(0);
let childNodes = div.childNodes();
let textNode = childNodes.item(0);
console.log(textNode.textContent)
```

--> Can i use HomePage!!! 

## UI Components

* ```html <button></button>``` is more stylable
Newer Browsers: 

```html 
    <input type="date"/>
    <input type="time"/>
    <input type="color"/>
```

Fetch Elements:

```javascript
let textInput = document.querySelector("input[type=text]"):
console.dir(textinput); //prints the properties

let btnInput = document.querySelector("input[type=button]"):
console.dir(btnInput); 

let button = document.querySelector("button"); 
console.dir(button);

let select = document.querySelector("select"); 
console.dir(select);
```

--> Element is browser specific

--> Depending on the selector different objects are instantiated

**Interacting with components**

```javascript
let textInput = document.querySelector("input[type=text]"):
console.dir(textinput); //prints the 

textInput.addEventListener("change", e => console.log(e.target.value));

```

## Dom Events:
```javascript
let textInput = document.querySelector("input[type=text]"):
console.dir(textinput); //prints the 

textInput.addEventListener("keypress", e => console.log(e.target.value));
```

**Custom Dom Events: **
```javascript
let div = document.querySelector("div"):
let customFire = new CustomEvent("fire",{detail: "firestarter"});

div.addEventListener("fire", e => console.log(e));
div.dispatchEvent(customFire);

```

Next section: 15