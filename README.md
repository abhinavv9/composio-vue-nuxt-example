# Composio Vue/Nuxt Integration Example

This project demonstrates how to integrate the Composio SDK into a JavaScript application using Vue.js and Nuxt.js, as outlined in the official Composio codelab.

## Features

*   Composio SDK installation.
*   Secure API key configuration using environment variables.
*   Composio plugin for Vue and Nuxt.
*   Example of making an authenticated API call.

## Prerequisites

*   Node.js and npm/yarn installed.
*   A Composio API key.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd composio-vue-nuxt-example
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of the project and add your Composio API key:

    ```env
    COMPOSIO_API_KEY=YOUR_COMPOSIO_API_KEY
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the Nuxt development server. You can access the application in your browser, typically at `http://localhost:3000`.

## Project Structure

```
composio-vue-nuxt-example/
├── .env
├── nuxt.config.ts
├── package.json
├── plugins/
│   └── composio.js
├── pages/
│   └── index.vue
├── components/
│   └── ComposioUser.vue
└── README.md
```

## Understanding the Code

*   **`.env`**: Stores your sensitive API key.
*   **`nuxt.config.ts`**: Configures Nuxt, including exposing environment variables to the runtime.
*   **`plugins/composio.js`**: Initializes the Composio SDK and makes it available throughout the Nuxt app.
*   **`pages/index.vue`**: The main page component that demonstrates fetching and displaying user data using Composio.
*   **`components/ComposioUser.vue`**: A reusable Vue component to display user profile information.

## Contributing

Contributions are welcome! Please refer to the `CONTRIBUTING.md` file for more details (if available).

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details (if available).