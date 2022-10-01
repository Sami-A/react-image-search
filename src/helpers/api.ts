const BASE_URL = import.meta.env.VITE__BASE_API_URL;
const API_KEY = import.meta.env.VITE__API_KEY;

export const get = async <T>(query: string): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}?key=${API_KEY}&${query}`);
      if (!response.ok) {
        throw new Error(response.statusText);
        /**
         * We also can throw  the error based on
         * status code.
         * 
         * if(response.status < 200 || response.status > 300){
         *   ...custom error message for specific status code
         * }
        */
      }
      const data = await response.json();
      resolve(data);
    } catch (error: unknown) {
      reject(error);
    }
  });
};
