import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/landing";
import AppLayout from "./layouts/app-layout";
import { ThemeProvider } from "./components/ThemeProvider";

import "./App.css";
import Onboarding from "./pages/onboarding";
import ProtectedRoute from "./components/ProtectedRoute";
import PostJob from "./pages/post-job";
import JobListing from "./pages/jobListing";
import SavedJobs from "./pages/saved-jobs";
import JobPage from "./pages/job";
import AdminPanel from "./pages/admin-panel";
import MyJobs from "./pages/my-jobs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin-panel",
        element: (
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
