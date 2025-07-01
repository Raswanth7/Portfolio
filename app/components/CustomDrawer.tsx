"use client"

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Overlay
function CustomDrawerOverlay({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 animate-in fade-in-0",
        className
      )}
      onClick={onClick}
    />
  );
}

// Content with framer-motion animation
function CustomDrawerContent({
  className = "",
  children,
  open,
  direction = "right",
}: {
  className?: string;
  children: ReactNode;
  open: boolean;
  direction?: "top" | "bottom" | "left" | "right";
}) {
  // Directional classes
  const directionClasses = {
    top: "inset-x-0 top-0 mb-24 max-h-[80vh] rounded-b-lg border-b",
    bottom: "inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg border-t",
    right: "inset-y-0 right-0 w-3/4 border-l sm:max-w-sm",
    left: "inset-y-0 left-0 w-3/4 border-r sm:max-w-sm",
  };
  // Only support bottom animation for now (as per your request)
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="drawer-content"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 35, duration: 0.5 }}
          className={cn(
            "fixed z-50 flex h-auto flex-col bg-background group/drawer-content",
            directionClasses[direction],
            className
          )}
          data-slot="drawer-content"
        >
          <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Header
function CustomDrawerHeader({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-left",
        className
      )}
    >
      {children}
    </div>
  );
}

// Footer
function CustomDrawerFooter({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div data-slot="drawer-footer" className={cn("mt-auto flex flex-col gap-2 p-4", className)}>
      {children}
    </div>
  );
}

// Title
function CustomDrawerTitle({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div data-slot="drawer-title" className={cn("text-foreground font-semibold", className)}>
      {children}
    </div>
  );
}

// Description
function CustomDrawerDescription({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div data-slot="drawer-description" className={cn("text-muted-foreground text-sm", className)}>
      {children}
    </div>
  );
}

// Main Drawer
function CustomDrawer({
  trigger,
  children,
  direction = "right",
  className = "",
}: {
  trigger: ReactNode;
  children: (closeDrawer: () => void, open: boolean) => ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const portalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      portalRef.current = document.body;
    }
  }, []);

  // Prevent background scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger}</span>
      {portalRef.current &&
        createPortal(
          <>
            <AnimatePresence>
              {open && <CustomDrawerOverlay onClick={closeDrawer} />}
            </AnimatePresence>
            {children(closeDrawer, open)}
          </>,
          portalRef.current
        )}
    </>
  );
}

export {
  CustomDrawer,
  CustomDrawerOverlay,
  CustomDrawerContent,
  CustomDrawerHeader,
  CustomDrawerFooter,
  CustomDrawerTitle,
  CustomDrawerDescription,
}; 