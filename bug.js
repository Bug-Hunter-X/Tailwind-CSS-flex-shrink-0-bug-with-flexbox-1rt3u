```javascript
<div class="flex">
  <div class="bg-red-500 p-4">
    This div is red.
  </div>
  <div class="bg-blue-500 p-4">
    This div is blue.
  </div>
</div>
```
This code snippet is expected to render two divs side-by-side, one red and one blue. However, if the parent div has `flex-shrink-0` added, it causes unexpected behavior. The blue div might be cutoff or disappear completely.