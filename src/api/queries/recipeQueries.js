import { useMutation, useQuery } from "@tanstack/react-query";
import { getMyRecipe, getRecipeDetail, getRecipeListByName, getRecipeMetaData } from "../axios/recipe/receipyApi";
import API from "../interceptor/API";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../RootStore";



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

    const navigate = useNavigate();

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
            alert('레시피가 등록되었습니다.');
            navigate('/mypage/myboards'); //페이지 이동
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
   * 내 레시피 조회 쿼리
   */
  export const useMyRecipeQuery = () => {
    const { data, error } = useQuery({
        queryKey: ['myRecipeData'], // 쿼리 키 수정
        queryFn: getMyRecipe,
        retry: false // 쿼리 실패 시 재시도 방지
    });

    return {
        content: data?.content || [],
        error
    };
};

 /**
   * 레시피 목록 조회
   * @description 레시피 이름으로 조회
   */
  export const useRecipeListQuery = () => {

    const recipeName = useAppSelector(state => state.search.searchContent);

    const {data, error} = useQuery({
        queryKey: ['recipeListByName', recipeName], //검색 내용이 바뀔때마다 다시 api 호출
        queryFn: () => getRecipeListByName(recipeName),
        retry: false
    })

    console.log('data', data?.content);

    return{
        content: data?.content || [],
        error
    }
  }

  /**
 * 레시피 상세조회 쿼리
 */
  export const useRecipeDetailQuery = (recipeId) => {
    

    const {data, error, isLoading} = useQuery({

        queryKey: ['recipeDetail', recipeId],
        queryFn: () => getRecipeDetail(recipeId),
        retry: false
    })

        return{
            data, error, isLoading,
        }
    
  }