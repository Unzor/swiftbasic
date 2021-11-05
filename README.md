# swiftbasic
Amasad's PG-Basic project but bundled, and mofified, for simpler use.
# Usage
Debugging with console:
```javascript
var interpreter = new Basic({
  console: console,
  debugLevel: 99
});
interpreter.run(`10 PRINT "HELLO WORLD"`);
```
Getting result:
```javascript
Basic.interpret_only_result('10 PRINT "Hello World!"').then(function(a){
alert(a);
})
```
