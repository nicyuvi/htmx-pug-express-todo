# TODO APP / HTMX/PUG/EXPRESS/SQLITE
I wanted to build a web app with minimal dependencies and simplified frontend.
Now all of the logic and state can live in the backend. We can still have
a composable frontend experience using pug as the template engine. 

## Local Development
```
git clone
cd htmx-pug-express-todo
npm i 
npm run dev
```
visit http://localhost:3000/ to view app

This project formats pug files with the vscode recommended extention

## Guideline
### Mixins, Partials, and Includes
Use `mixins` for bits of UI to be reusable (buttons, inputs, etc.) and `partials` for a chunk of UI to be rendered by server and swapped by htmx. `includes` should be seen as import statements for our `mixins`. 

- Mixins should always take an object as it's argument 
- We can define attributes with the `&attributes` syntax to keep our mixins flexible
- We can use `block` in our mixins to act as slots for our nested content
- If our mixin has no arguments, use the following syntax to explicitly define our arguments `+button({})(class='btn')`

