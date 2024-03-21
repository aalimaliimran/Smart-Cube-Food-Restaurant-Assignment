# Food Restaurant React App Assignment

Welcome to the Food Restaurant React App! This application allows users to browse food items, categorized by type, add them to their cart, and view detailed information along with image carousel in a popup. Below, you'll find installation instructions, project structure, dependencies, best practices, build guidelines, and additional notes.

## Installation

To get started with the Food Restaurant React App, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/aalimaliimran/Smart-Cube-Food-Restaurant-Assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd smart-cube-food-restaurant-assignment
   ```

3. Install project dependencies using npm:

   ```bash
   npm install
   ```

4. Make sure you have Node.js installed on your system. If not, download and install it from [Node.js official website](https://nodejs.org/).

5. Run the development environment:

   ```bash
   npm run dev
   ```

## Dependencies

The project utilizes the following dependencies:

```json
"dependencies": {
  "@heroicons/react": "^2.0.18",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-responsive-carousel": "^3.2.23",
  "react-swipeable": "^7.0.1"
},
"devDependencies": {
  "@types/react": "^18.2.15",
  "@types/react-dom": "^18.2.7",
  "@vitejs/plugin-react": "^4.0.3",
  "autoprefixer": "^10.4.15",
  "eslint": "^8.45.0",
  "eslint-plugin-react": "^7.32.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.3",
  "postcss": "^8.4.29",
  "postcss-nesting": "^12.1.0",
  "tailwindcss": "^3.3.3",
  "vite": "^4.4.5"
}
```

## Project Structure

Here's the structure of the project:

```
smart-cube-food-restaurant-assignment/
│
├── components/
│   ├── Cart/
│   ├── CartItem/
│   ├── CategoryList/
│   ├── FoodList/
│   ├── FoodListItem/
│   ├── Footer/
│   ├── Header/
│   ├── MealList/
│   └── Modal/
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Best Practices

- External Tailwind CSS files are used to keep JSX clean and easy to understand, making the application more dynamic for large-scale projects.
- DRY (Don't Repeat Yourself) principles are applied throughout the codebase.
- Design patterns are implemented to ensure maintainability and scalability.
- Vite.js is utilized for efficient project development and build processes.

## Build

The build is located in the `dist` folder. To properly test your production build, serve it using a local server. You can use tools like `serve` or `http-server`. Here's how to do it:

1. Install `serve` globally if you haven't already:

   ```bash
   npm install -g serve
   ```

2. Navigate to your project's "dist" directory.

3. Start the local server:

   ```bash
   npx serve -s
   ```

## Notes

- Heroicons, designed by the Tailwind CSS team, are used instead of Uicons due to Uicons being in beta and not updated for the past two years.
- The provided Work Sans font is used throughout the application.
- Dummy images are used as placeholders since the XD design link only provided a view link, making it impossible to download images.

## Screenshots
![2024-03-21_20-04-18](https://github.com/aalimaliimran/Smart-Cube-Food-Restaurant-Assignment/assets/108981157/2034194f-e1a3-46cf-84bd-edc55c904dd3)


Please reach out to me if there is any issue to run the application, please contact [aalim.ali.imran@gmail.com](mailto:aalim.ali.imran@gmail.com).
