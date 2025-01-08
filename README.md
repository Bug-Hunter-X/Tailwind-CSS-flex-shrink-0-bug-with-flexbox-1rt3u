# Tailwind CSS flex-shrink-0 Bug
This repository demonstrates a bug encountered when using `flex-shrink-0` with flexbox in Tailwind CSS.  The issue is that unexpected behavior occurs, particularly when the containing element is trying to fit into a smaller space and one of its children utilizes `flex-shrink-0`. This can cause the unexpectedly cropped or hidden elements. 

## Bug Description
The primary bug is the unexpected rendering caused by using `flex-shrink-0` within a `flex` container.  When the container's width is smaller than the combined width of its children, and a child has `flex-shrink-0`, the child might be unexpectedly hidden or cropped rather than shrinking proportionally.

## How to Reproduce
1. Clone this repository.
2. Open `bug.html` in your browser.
3. Observe the rendered output. You'll notice the potential issues with the layout when `flex-shrink-0` is used.

## Solution
The provided solution demonstrates an alternative approach to achieve the desired layout without encountering the issue caused by `flex-shrink-0`. Check out `bugSolution.html`.