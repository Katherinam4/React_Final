import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [enabled, setEnabled] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;

    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabled];
}

export default useDarkMode;
