import { useLocation } from "react-router-dom";
import { useEffect } from 'react'
import { MENUS } from "../components/Navigator";

export function useTitle(){
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = MENUS.find(({ path }) => pathname === path)?.title || "";
  }, []);
}