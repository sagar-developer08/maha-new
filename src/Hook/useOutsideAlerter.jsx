import { useEffect } from "react";

function useOutsideAlerter(ref, setState) {
  function handleClickOutside(event) {
    console.log("out CLick");
    if (ref.current && !ref.current.contains(event.target)) {
      setState(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}
export default useOutsideAlerter;
