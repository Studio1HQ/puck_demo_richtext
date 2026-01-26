# Building a Rich Text Editor in React

The goal of this project is to demonstrate how modern React applications can implement rich text editing using a structured, controlled, and extensible approach rather than relying on uncontrolled HTML or manual editor wiring.

---

## What This Demo Shows

This project focuses on three core ideas:

- **Structure**  
  Rich text content is defined and managed through configuration instead of raw HTML strings.

- **Control**  
  Editor behavior and formatting options are intentionally restricted to enforce consistency and design rules.

- **Extensibility**  
  New editor capabilities are added through TipTap extensions and exposed via custom toolbar controls without modifying core editor code.

---

## Tech Stack

- React / Next.js
- Puck Editor
- TipTap (rich text engine)
- TypeScript

---

## Features Demonstrated

- Basic rich text editor setup using Puck
- Inline and sidebar based editing
- Disabling formatting options (example: bold)
- Restricting heading levels (H1 and H2 only)
- Customizing the editor toolbar
- Adding a custom TipTap extension (Superscript)
- Exposing custom extensions through a custom toolbar control

---

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
---

## Install dependencies:

`npm install`


## Start the development server:

`npm run dev`

---

## Running the Demo

Once the server is running:

- Open the editor at http://localhost:3000/edit
- Edit content using the rich text editor
- Publish changes
- View the rendered output on the main page

---

## Project Structure (Relevant Files)

```
puck.config.tsx   // Editor and rich text configuration
app/editor        // Puck editor route
app/page.tsx      // Rendered page output
```

Most of the behavior is implemented inside `puck.config.tsx.`

---

## Further Exploration

You can extend this demo by: 

- Adding more TipTap extensions
- Introducing additional editor constraints
- Experimenting with different toolbar layouts
- Integrating persistence or collaboration features
- Refer to the [Puck documentation](https://puckeditor.com/docs) for advanced customization options.
