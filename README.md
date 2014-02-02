How to use jQuery NasdaqAnimation plugin
===============
jQuery NasdaqAnimation is a lightweight plugin that wants to solve the problem when you have a very long text for a single line and you don't want to use another line, css ellipsis (...) or any other solution. Otherwise, you just like this text effect.

It uses CSS3 transitions to do it.

For browser transition support see [http://www.w3schools.com/css/css3_transitions.asp](http://www.w3schools.com/css/css3_transitions.asp)

## Demo

* [index.html](http://www.madebyaleix.com/projects/nasdaq-animation/)

## Usage

Animation settings are:

* **duration**  
   text animation duration (By default, 50 seconds)
* **loop** 

  repeat text animation loop every X seconds (By default, 1second)
* **effect**

  css text transition effect (By default, ease)

Basic layout:

```html
<div class="nasdaq-animation">
  <span><!-- put your text content here --></span>
</div>
```

Custom layout (recomended):

```html
<div class="nasdaq-animation" data-duration="20" data-loop="2" data-effect="linear">
  <span><!-- put your text content here --></span>
</div>
```

Basic javascript initialization:

```javascript
$('.nasdaq-animation').nasdaqAnimation();
```