import { useEffect } from 'react';

export function useKey(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener('keyup', callBack);

      return function () {
        document.removeEventListener('keyup', callBack);
      };
    },
    [key, action]
  );
}
