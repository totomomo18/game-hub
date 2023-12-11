import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
    slug: string;
  }
  
const useGenres=()=> useData<Genre>("/genres");


export default useGenres