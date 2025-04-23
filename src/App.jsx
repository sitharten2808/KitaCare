import React, { Suspense, useState, useEffect } from 'react';
import { ChatbotProvider } from './contexts/ChatbotContext';
import FloatingActionButton from './components/FloatingActionButton';
import ChatbotPopup from './components/ChatbotPopup';
import { useChatbot } from './contexts/ChatbotContext';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from './components/preloader';
import ScrollToTop from "@/components/ui/ScrollToTop"; // Adjust the path as needed


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
import AILearning from './pages/AILearning';
import NearbyFacilities from './pages/NearbyFacilities';
import CommunitySupport from "./pages/CommunitySupport";
import Careers from "./pages/Careers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const ChatbotWrapper = () => {
  const { isOpen, openChatbot, closeChatbot } = useChatbot();
  return (
    <>
      <FloatingActionButton onClick={openChatbot} />
      <ChatbotPopup isOpen={isOpen} onClose={closeChatbot} />
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ChatbotProvider>
              <BrowserRouter>
              <ScrollToTop />
                <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
                  <Navbar />
                  <Suspense fallback={<Preloader />}>
                    <main className="flex-grow">
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/government-services" element={<GovernmentServices />} />
                        <Route path="/healthcare" element={<Healthcare />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/community-support" element={<CommunitySupport />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/employment" element={<Employment />} />
                        <Route path="/digital" element={<Digital />} />
                        <Route path="/ai-learning" element={<AILearning />} />
                        <Route path="/nearby-facilities" element={<NearbyFacilities />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                  </Suspense>
                  <Footer />
                  <ChatbotWrapper />
                </div>
              </BrowserRouter>
            </ChatbotProvider>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
