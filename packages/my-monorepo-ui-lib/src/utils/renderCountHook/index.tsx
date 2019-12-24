import { useRef } from "react";

export const useRenderCounter = (prefix: string) => {
  const renders = useRef(0);
  renders.current += 1;
  console.log(prefix, "renders: ", renders.current);
};
export default useRenderCounter;
