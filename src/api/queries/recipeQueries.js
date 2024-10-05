import { useQuery } from "@tanstack/react-query"
import API from "../interceptor/API";
import { useEffect, useState } from "react";




//레시피 메타데이터 조회
export const useRecipeMetaDataQuery = () => {

    const [ingredients, setIngredients] = useState([]);
    const [tags, setTags] = useState([]);

    const { data, error } = useQuery({
        queryKey: ['revipeMetadata'],  // 쿼리 키
        queryFn: async () => {
            try {
                const response = await API.get('/recipe/metadata');
                return response.data;
            } 
            catch (error) {
                throw error;
            }
        },
        retry: false // 쿼리 실패 시 재시도 방지
    })

    useEffect(() => {
        if (data) {
            setIngredients(data.ingredients);
            setTags(data.tags);
        }
    }, [data]); // data가 업데이트될 때마다 실행

    return{
        ingredients, tags, error
    }
}