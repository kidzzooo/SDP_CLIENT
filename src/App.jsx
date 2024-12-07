import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages from the `pages` directory
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Layout from "./roles/Layout";

// Import role-specific pages from the `roles` directory
import AdminDashboard from "./pages/Admin";
import ManageContent from "./roles/Admin/ManageContent";
import ManageTopics from "./roles/Admin/ManageTopics";
import ManageUsers from "./roles/Admin/ManageUsers";

import CitizenDashboard from "./pages/Citizen";
import ExploreContent from "./roles/Citizen/ExploreContent";
import JoinDiscussions from "./roles/Citizen/JoinDiscussions";
import MyFeedback from "./roles/Citizen/MyFeedback";

import EducatorDashboard from "./pages/Educator";
import ManageEvents from "./roles/Educator/ManageEvents";
import EducatorManageContent from "./roles/Educator/ManageContent";
import EducatorManageTopics from "./roles/Educator/ManageTopics";

import AddArticlePage from "./pages/ArticlePage";
import AddVideoPage from "./pages/VideoPage";
import QuizPage from "./pages/QuizPage";
import ContentDetails from "./roles/Citizen/ContentDetails";
import FeaturesPage from "./pages/Features";
// App component
function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/features" element={<FeaturesPage />} />
      {/* Role-Based Routes */}

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/manage-content" element={<ManageContent />} />
      <Route path="/admin/manage-topics" element={<ManageTopics />} />
      <Route path="/admin/manage-users" element={<ManageUsers />} />

      {/* Citizen Routes */}
      <Route path="/citizen" element={<CitizenDashboard />} />
      <Route path="/citizen/explore-content" element={<ExploreContent />} />
      <Route path="/citizen/join-discussions" element={<JoinDiscussions />} />
      <Route path="/citizen/my-feedback" element={<MyFeedback />} />

      {/* Educator Routes */}
      <Route path="/educator" element={<EducatorDashboard />} />
      <Route path="/educator/manage-events" element={<ManageEvents />} />
      <Route
        path="/educator/manage-content"
        element={<EducatorManageContent />}
      />
      <Route
        path="/educator/manage-topics"
        element={<EducatorManageTopics />}
      />

      <Route path="/add-content/article" element={<AddArticlePage />} />
      <Route path="/add-content/video" element={<AddVideoPage />} />
      <Route path="/add-content/quiz" element={<QuizPage />} />
      <Route path="/content/:id" element={<ContentDetails />} />


      {/* Catch-All Route for 404 */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
