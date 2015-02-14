How to use jQuery jTicker plugin
===============
jQuery jTicker is a lightweight plugin that wants to solve the problem that arises when you have a very long text for a single line and you don't want to use another line, css ellipsis (...) or any other solution. Or, simply, you just like this text effect.

It uses CSS3 transitions to do it.

For browser transition support see [http://www.w3schools.com/css/css3_transitions.asp](http://www.w3schools.com/css/css3_transitions.asp)

## Demo

* [index.html](http://www.madebyaleix.com/projects/jticker/)

## Usage

Animation settings are:
* **duration**
  text animation duration
  default: 50 seconds
* **loop**
  repeat text animation loop every X seconds
  default: 1second
* **effect**
  css text transition effect
  default: ease

Basic layout:

```html
<div class="ticker">
  <span><!-- put your text content here --></span>
</div>
```

Custom layout (recomended):

```html
<div class="ticker" data-duration="20" data-loop="2" data-effect="linear">
  <span><!-- put your text content here --></span>
</div>
```

Basic javascript initialization:

```javascript
$('.ticker').jTicker();
```