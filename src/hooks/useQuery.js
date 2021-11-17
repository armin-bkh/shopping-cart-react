import { useLocation } from "react-router";
import queryString from 'query-string';

export const useQuery = () => {
    const { search } = useLocation();
    const query = queryString.parse(search);

    return [query, search];
}