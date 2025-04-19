
import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from './components/Loader';

// Providers
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

// Layouts
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Index from "./pages/Index";
import GovernmentServices from "./pages/GovernmentServices";
import Healthcare from "./pages/Healthcare";
import Community from "./pages/Community";
import Employment from "./pages/Employment";
import Digital from "./pages/Digital";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <Suspense fallback={<Loader />}>
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/government-services" element={<GovernmentServices />} />
                    <Route path="/healthcare" element={<Healthcare />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/employment" element={<Employment />} />
                    <Route path="/digital" element={<Digital />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </Suspense>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
