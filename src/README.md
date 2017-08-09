# Installation
1. Open Folder
2. Double click index.html
3. profit 

# NOTES
## index.html Optimizations
- Inlined style.css
- added media attribute to link element for print style sheet
- minified print.css and perfmatters.js
- compressed local images
- moved inline script to the end of index.html
- moved perfmatters.js script to bottom of index.html and added a `defer` attribute

## main.js Optimizations
- Removed the functions `determineDx` and moved its functionality into `changePizzaSizes`
- Reduced repetitive iterations of `document.querySelectorAll(".randomPizzaContainer")`
- Removed `sizeSwitcher` function and kept functionality within `changePizzaSizes`
- Moved `dx` and `newwidth` evaluation outside of for loop
- Moved `pizzasDiv` initiation outside the for loop
- Moved pizza animation into callback for `requestAnimationFrame` function
- Moved taxing non iterative depedent evaluations out side of the for loop