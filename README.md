# devSamad

## Project Title and Description

DevSamad is an interactive personal portfolio crafted using React and a suite of modern web development tools. This website is designed to showcase Abdessamad BOUIH, a student at ISTA Ouarzazate, and highlight their projects, skills, and contact information. The user interface is built with Tailwind CSS and NextUI, providing a responsive and engaging user experience.

## Features

- **Portfolio Presentation:** Provides a detailed presentation of Abdessamad BOUIH's portfolio.
- **Responsive Design:** Utilizes Tailwind CSS for adaptive design across various devices.
- **Modern UI Components:** Implements advanced user interface components with NextUI.
- **Smooth Animations:** Incorporates animations using Framer Motion for an engaging user experience.
- **Easy Navigation:** Uses React Router for seamless navigation between different sections.
- **Lucide Icons:** Employs Lucide React for clear and aesthetically pleasing vector icons.
- **Spline Integration:** Integrates interactive 3D scenes created with Spline.
- **Theme Management:** Allows users to switch between different themes to customize the site's appearance.
- **API Key:** Provides an API key via a `.env` file for accessing external resources.

## Tech Stack Table

| Technology | Description                                                                 |
| :---------- | :-------------------------------------------------------------------------- |
| React       | JavaScript library for building user interfaces.                             |
| NextUI      | React UI framework providing aesthetic and functional components.            |
| Tailwind CSS | Utility-first CSS framework for rapid and flexible styling.                 |
| Framer Motion | Library for creating animations and transitions in React.                   |
| React Router DOM| For managing navigation in the application.                               |
| Lucide React  | Vector icon library.                                                        |
| Axios       | HTTP client for making requests.                                            |
| PrismJS     | Used for code syntax highlighting.                                        |
| React Icons  | Provides a collection of icons for React.                                 |
| Clsx        | Utility for conditionally joining class names.                               |
| Class Variance Authority (CVA) | Utility for authoring compound variants |
| Spline | Used for creating and integrating interactive 3D scenes. |
| ShadcnUI | UI Library using Tailwind, Radix UI and Variants |

## Installation Instructions

1. **Prerequisites:**

   Ensure you have Node.js and npm (or yarn) installed on your machine.

   - Node.js (version 18 or higher)
   - npm (or yarn)

2. **Clone the repository:**

   ```bash
   git clone https://github.com/abdessamad10bouih/devSamad.git
   cd devSamad
   ```

3. **Install dependencies:**

   ```bash
   npm install  # or yarn install
   ```

4. **Configure environment variables:**

   Create a `.env` file in the project root with the `VITE_API_KEY` variable:

   ```
   VITE_API_KEY=your_api_key
   ```

5. **Start the development server:**

   ```bash
   npm run dev  # or yarn dev
   ```

   The site will be accessible at the address indicated in the console (typically `http://localhost:5173`).

## Usage

Once the development server is running, you can navigate through the different sections of the portfolio. The site is designed to be intuitive and easy to explore.  Remember to replace `your_api_key` with a real API key if needed for external resource access.

## Project Structure Tree

```
devSamad/
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── README.md             # This file
├── components.json       # Shadcn UI configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── jsconfig.app.json     # jsconfig for the application
├── jsconfig.json         # Main jsconfig
├── jsconfig.node.json    # jsconfig for Node
├── package-lock.json     # npm dependency lockfile
├── package.json          # npm configuration file
├── postcss.config.js     # PostCSS configuration
├── src/                  # Application source code
│   ├── App.css
│   ├── App.jsx
│   ├── assets/           # Static assets (images, icons)
│   ├── components/       # Reusable UI components
│   │   └── ui/         # Shadcn UI components
│   ├── index.css         # Main CSS file (Tailwind)
│   ├── main.jsx          # JavaScript entry point
│   └── pages/            # Portfolio pages
└── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## Configuration

The primary configuration files include:

-   `.env`: Contains the `VITE_API_KEY` variable, potentially required for accessing external resources.
-   `tailwind.config.js`: Configures themes, fonts, and breakpoints for Tailwind CSS.  Extends default configuration using `extend` property and sets `darkMode` to class based.
-   `vite.config.js`: Specifies path aliases using the `resolve.alias` property and uses the react plugin.

### .env Example

```
VITE_API_KEY=your_api_key
```

## Testing

Currently, no dedicated testing documentation is available within this repository.

## Deployment

This project is designed for easy deployment on various web hosting platforms. Basic deployment steps:

1.  Build the application:

    ```bash
    npm run build  # or yarn build
    ```

2.  Deploy the built files (typically in the `dist` directory) to your preferred hosting platform (e.g., Netlify, Vercel, GitHub Pages).

No specific CI/CD configurations are provided in this repository.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Maintainer and Contact Info

- Student: **Abdessamad BOUIH**
- Supervisor: **GAHI Said**
- Institution: **ISTA Ouarzazate**
- GitHub Repository: https://github.com/abdessamad10bouih/devSamad
