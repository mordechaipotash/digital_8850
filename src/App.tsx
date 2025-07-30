import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import FormPage from './pages/FormPage';
import ThankYouPage from './pages/ThankYouPage';
import './i18n'; // Initialize i18n

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          {/* Main form route */}
          <Route path="/" element={<FormPage />} />
          <Route path="/8850_form" element={<FormPage />} />
          <Route path="/8850_form.html" element={<Navigate to="/8850_form" replace />} />
          
          {/* Thank you page */}
          <Route path="/thank-you" element={<ThankYouPage />} />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;