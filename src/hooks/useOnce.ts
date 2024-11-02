// src/hooks/useOnce.ts
import { useRef, useEffect } from "react"; // necessary hooks from React
export const useOnce = (_effect: () => void) => {
  // Ref to hold the effect function
  const effect = useRef<() => void | undefined>(_effect);
  // Ref to hold the cleanup function returned by the effect
  const destroy = useRef<void | undefined>();
  // Ref to track if the effect has been called
  const effectCall = useRef(false);
  // Ref to check if the component has rendered
  const rendered = useRef(false);

  // Mark rendered as true if the effect has been called
  if (effectCall.current) {
    rendered.current = true;
  }

  // Only call the effect if it hasn't been called before
  useEffect(() => {
    // If the component hasn't rendered, skip cleanup
    if (!effectCall.current) {
      // Call the effect and store the cleanup function
      destroy.current = effect.current();
      effectCall.current = true; // Mark that the effect has been called
    }

    // Cleanup function for when the component unmounts or the effect is re-run
    return () => {
      // If the component hasn't rendered, skip cleanup
      if (rendered.current === false) return;
      // Call the cleanup function if it exists
      if (destroy.current) destroy.current;
    };
  }, []);
};
