import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Collections from "./pages/Collections";
import AgentsList from "./pages/AgentsList";
import WalletOverview from "./pages/WalletOverview";
import Usage from "./pages/Usage";
import Investors from "./pages/Investors";
import Governance from "./pages/Governance";
import Yield from "./pages/Yield";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/agents" element={<AgentsList />} />
          <Route path="/wallet" element={<WalletOverview />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/yield" element={<Yield />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
