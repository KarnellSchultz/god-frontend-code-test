import { useState, useEffect } from "react";
export interface Size {
  width: number | undefined;
  height: number | undefined;
}

const MOBILE_BREAKPOINT = 768;

export const useWindowSize = (mobileBreakpoint = MOBILE_BREAKPOINT) => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widownWidth = windowSize?.width ?? 1000;
  const isMobile = widownWidth <= mobileBreakpoint ? true : false;
  return { windowSize, isMobile };
};

export const useActivePage = (isMobile: boolean, filterKey: string) => {
  const initPage = 1;
  const [activePage, setActivePage] = useState(initPage);
  useEffect(() => {
    setActivePage(initPage);
  }, [isMobile, filterKey]);
  return [activePage, setActivePage] as const;
};
