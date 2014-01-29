How to use jQuery NasdaqAnimation plugin
===============
jQuery NasdaqAnimation is a lightweight plugin that wants to solve the problem when you have a very long text for a single line and you don't want to use another line, css ellipsis (...) or any other solution. 

It uses CSS3 transitions to do it.

## Demo

* [index.html](http://www.madebyaleix.com/projects/nasdaq-animation/)

## Usage

Basic layout:

```html
<div class="nasdaq-animation">
  <span><!-- your text content --></span>
</div>
```

Custom layout (recomended):

```html
<div class="nasdaq-animation" data-duration="20" data-loop="2" data-effect="linear">
  <span><!-- your text content --></span>
</div>
```

Basic javascript initialization:

```javascript
$('.nasdaq-animation').nasdaqAnimation();
```