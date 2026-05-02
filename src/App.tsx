import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react"
import StickyCTA from "./components/StickyCTA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <StickyCTA />
      </BrowserRouter>

      <Analytics />

      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;