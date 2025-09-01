# live-projects-reactjs

## Live Coding Exercise 1: TODO LIST

Build a simple Todo List component with these requirements:

A text input and a button to add a new todo.

Each todo should display with a "Remove" button next to it.

When there are no todos, show a placeholder message like: "No todos yet.".

Keep the state inside the component (no Redux/Context yet).

## Live Coding Exercise 2: SEARCH USER

Build a Searchable User List component.

Requirements:

1. You have an array of users (hardcoded inside the component for now), e.g.:

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" }
];


2. Render all users in a list.

3. Add a search input at the top.

4. As the user types, filter the list by name (case-insensitive).

5. If no users match, display "No users found.".

Bonus (optional, if you want extra challenge):

- Extract the search input into its own component (<SearchBox />) and pass the query up.