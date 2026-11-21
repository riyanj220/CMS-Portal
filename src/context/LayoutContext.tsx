import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";

interface LayoutContextType {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  toggleMobileSidebar: () => void;
  desktopCollapsed: boolean;
  setDesktopCollapsed: (collapsed: boolean) => void;
  toggleDesktopCollapse: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const location = useLocation();

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen((prev) => !prev);
  };

  const toggleDesktopCollapse = () => {
    setDesktopCollapsed((prev) => !prev);
  };

  return (
    <LayoutContext.Provider
      value={{
        mobileSidebarOpen,
        setMobileSidebarOpen,
        toggleMobileSidebar,
        desktopCollapsed,
        setDesktopCollapsed,
        toggleDesktopCollapse,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
