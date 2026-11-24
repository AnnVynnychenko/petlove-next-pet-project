import { useEffect, useRef } from 'react';

export const useEscapeClose = onClose => {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        if (typeof onCloseRef.current === 'function') {
          onCloseRef.current?.();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};
