import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { toggleSideBar } from "@/shared/model/sidebar";

export const useSidebar = () => {
  const isOpenSidebar = useAppSelector(state => state.sideBar.isOpen);
  const dispatch = useAppDispatch();
  const toggleSidebar = useCallback(() => {
    dispatch(toggleSideBar());
  }, [dispatch]);

  return { isOpenSidebar, toggleSidebar };
};
