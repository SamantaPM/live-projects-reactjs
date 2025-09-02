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

**Bonus (optional, if you want extra challenge):**

- Extract the search input into its own component (<SearchBox />) and pass the query up.
  
## Live Coding Exercise 3 (React Router): MINI BLOG

Build a Mini Blog App with React Router.

Requirements:

1. Set up 3 routes:
   - / → Home page → shows a welcome message.
   - /posts → Posts page → shows a list of posts (hardcoded array).
   - /posts/:id → Post Details page → clicking a post in the list takes you here and shows its title + content.

2. Navigation:
   - Add a simple nav bar with links to Home and Posts.
   - Active link should be visually different (hint: NavLink in React Router).

3. Posts data (put in a local file or inside Posts.jsx for now):
```
  const posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
    { id: 3, title: "Third Post", content: "This is the third post." }
  ];
```

**Bonus (optional, extra credit)**
- Add a "Back to Posts" link on the details page.
- Show "Post not found" if the id doesn’t exist.
