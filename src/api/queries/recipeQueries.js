import { useMutation, useQuery } from "@tanstack/react-query";
import { getRecipeMetaData, getUserRecipe } from "../axios/recipe/receipyApi";
import API from "../interceptor/API";
import { useProfileQuery } from "./profileQueries";

/**
 * 레시피 메타데이터 조회
 * @author 소연
 */
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


/**
 * 레시피 등록 쿼리
 * @author 소연
 */
export const useRecipeRegisterQuery = () => {

    const regist = useMutation({
        mutationFn: async (recipeData) => {
            try {
              const response = await API.post(
                '/recipe/register',
                recipeData,
                { headers: {"Content-Type": 'multipart/form-data'} },
                {withCredentials: true} //CORS
              );
              return response;
            } catch (error) {
                throw error
            }
          },
        onSuccess: (data) => {
            console.log(data);
            alert('레시피가 등록되었습니다.')
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const recipeRegist = (formData) => {
        regist.mutate(formData);
    }

    return { recipeRegist };

}


  /**
   * 사용자별 레시피 조회 쿼리
   */
  export const useSearchRecipeByUserQuery = () => {

    const { nickname } = useProfileQuery();

    const { data, error } = useQuery({
        queryKey: ['userByRecipeData', nickname], // 쿼리 키 수정
        queryFn: () => getUserRecipe(nickname),
        enabled: !!nickname, // nickname이 존재할 때만 쿼리를 실행
        retry: false // 쿼리 실패 시 재시도 방지
    });

    return {
        content: data?.content || [],
        error
    };
};