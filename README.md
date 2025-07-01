🚀 React Project Boilerplate
This repository contains a pre-configured React project structure to standardize development across all team projects, ensuring clean architecture, scalability, and consistency.

# 📂 Project Structure
`/components <br>
/assets
/axios
/hooks
/pages
/react-query-hooks
/redux
/services
/utils
/Routes`
Reusable React components are used throughout the application (e.g., buttons, modals, input fields) to maintain consistency and avoid duplication.

# /assets
Contains static files:
Images
Icons
SVGs
Fonts

# /axios
Configured Axios interceptors for:
Attaching tokens to requests automatically.
Handling global request/response behaviors.
Centralized error handling for HTTP requests.

# /hooks
Custom reusable React hooks for shared logic across the app, improving readability and modularity.

# /pages
Contains all page-level components, mapped to routes (e.g., Home, Dashboard, Login).

# /react-query-hooks
Custom React Query hooks for API interactions:
Each API has its own hook file for clarity and separation of concerns.
Follows React Query best practices for caching, loading, and error states.
Example: useGetUsers.ts, useCreatePost.ts.

# /redux
Includes:
Slices: State management logic using Redux Toolkit.
Store: Centralized Redux store for predictable state management when needed alongside React Query.

# /services
Manages API configuration:
urls.ts: Exports all API endpoints using a URL class for centralized management.
baseApi.ts: Defines REST API patterns (GET, POST, PUT, DELETE) with Axios, maintaining consistent API interaction patterns.

# /utils
Utility functions and constants:
constants.ts – Global constants used across the app.
helper.ts – Utility helper functions.
types.ts – Type definitions/interfaces.
toastifyHelper.ts – Helper functions for showing notifications using React-Toastify.

# /Routes
Manages application routing cleanly:
AppRoutes – Defines the app’s routing structure.
PublicRoutes – Handles public routes accessible without authentication.
ProtectedRoutes – Manages routes requiring authentication and role-based access.

# ⚙️ Tech Stack
React
React Router Dom for routing.
Axios for HTTP requests with interceptors.
React Query for efficient data fetching, caching, and auto refetching.
Redux Toolkit for global state management when required.
TypeScript for static type checking (if applicable).
React Toastify for notifications.
Prettier & ESLint for consistent formatting and linting.

# 🚀 Getting Started
1️⃣ Clone the repository:
`git clone <repo-url>`
`cd <project-folder>`

2️⃣ Install dependencies:
`npm install`
or
`yarn install`

3️⃣ Run the app:
`npm start`
or
`yarn start`

# 💡 Contribution Guidelines
✅ Follow the folder structure while adding new features.
✅ Use React Query hooks for API calls wherever possible.
✅ Place reusable UI in /components.
✅ Keep API URLs inside /services/urls.ts and use /services/baseApi.ts for requests.
✅ Use consistent naming conventions for hooks and components.
✅ Add meaningful commit messages.

# 🛡️ Best Practices
✅ Keep components small and reusable.
✅ Use React Query for data fetching instead of manually managing loading states in Redux where possible.
✅ Use .env files for environment variables.
✅ Ensure TypeScript types are properly defined (if using TypeScript).
✅ Format code using Prettier before pushing.

# 🤝 Support
If you face any issues with the boilerplate, feel free to:
Create an issue in the repository.
Ping in the team Slack for clarifications.

# 🏁 Summary
This boilerplate ensures:
✅ Fast project bootstrapping.
✅ Clean, scalable structure for medium to large React applications.
✅ Team consistency and productivity.
