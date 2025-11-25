import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { useSidebar } from "@/shared/model";
import { useClickOutside, useMobileView } from "@/shared/lib";
import { cn } from "@/shared/utils";

const BaseLayout = () => {
  const { isOpenSidebar, toggleSidebar } = useSidebar();
  const isMobileView = useMobileView();
  const sidebarRef = useRef<HTMLElement | null>(null);
  const isMobileSidebar = isOpenSidebar && isMobileView;
  useClickOutside({
    ref: sidebarRef,
    enabled: isMobileSidebar,
    callback: toggleSidebar,
  });

  return (
    <div className="app">
      <Sidebar ref={sidebarRef} />
      <div className={cn("content", isMobileSidebar && "no-pointer")}>
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
