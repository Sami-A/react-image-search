import { Images } from "../scene/types";

export interface ImageResponse {
  hits: Images[];
  total: number;
  totalHits: number;
}

const BASE_URL = import.meta.env.VITE__BASE_API_URL;
const API_KEY = import.meta.env.VITE__API_KEY;

export const get = async (query: string): Promise<ImageResponse> => {
  const searchUrl = `per_page=24&image_type=photo&q=${query}`;

  const response = await fetch(`${BASE_URL}?key=${API_KEY}&${searchUrl}`);
  const data = await response.json();
  return data;
};
