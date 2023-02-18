import { useEffect } from "react";

const useIsElementVisible = (target: any, isVisible: any, setIsVisible: any): any => {
  // handle visibility changes
  const onVisibilityChange = (entries: IntersectionObserverEntry[]): void => {
    setIsVisible(entries[0].isIntersecting)
  };

  useEffect(() => {
    // bind IntersectionObserver to the target element
    const observer = new IntersectionObserver(onVisibilityChange);
    if (target) {
      observer.observe(target);
    }
  }, [target]);

};

export default useIsElementVisible;