import { useQuery } from "@tanstack/react-query";
import { getRecipeMetaData } from "../axios/recipe/receipyApi";

// 레시피 메타데이터 조회
export const useRecipeMetaDataQuery = () => {
    const { data, error } = useQuery({
        queryKey: ['recipeMetadata'], // 쿼리 키 수정
        queryFn: getRecipeMetaData,
        retry: false // 쿼리 실패 시 재시도 방지
    });

    return {
        ingredients: data?.ingredients || [], // data가 undefined일 때 빈 배열로 초기화
        tags: data?.tags || [], // data가 undefined일 때 빈 배열로 초기화
        error
    };
};
