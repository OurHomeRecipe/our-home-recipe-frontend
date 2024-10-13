import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyRecipe, getRecipeDetail, getRecipeListByName, getRecipeMetaData } from "../axios/recipe/receipyApi";
import API from "../interceptor/API";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../RootStore";
import { createRecipeComment, readRecipeComment } from "../axios/recipe/recipyCommentApis";


/**
 * 레시피 메타데이터 조회
 * @author 소연
 */
export const useRecipeMetaDataQuery = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['recipeMetadata'], // 쿼리 키 수정
        queryFn: getRecipeMetaData,
        retry: false // 쿼리 실패 시 재시도 방지
    });

    return { data, error, isLoading };
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
    const { data, error, isLoading } = useQuery({
        queryKey: ['myRecipeData'], // 쿼리 키 수정
        queryFn: getMyRecipe,
        retry: false // 쿼리 실패 시 재시도 방지
    });

    return {
        data, error, isLoading
    };
};

 /**
   * 레시피 목록 조회
   * @description 레시피 이름으로 조회
   */
export const useRecipeListQuery = () => {

    //Redux로 가져온 전역 상태변수
    const recipeName = useAppSelector(state => state.search.searchContent); 

    const {data, error} = useQuery({
        queryKey: ['recipeListByName', recipeName], // recipeName이 바뀔때마다 다시 api 호출
        queryFn: () => getRecipeListByName(recipeName),
        retry: false
    })

    return{
        content: data?.content || [],
        totalPages: data?.totalPages || '',
        pageable: data?.pageable || [],
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

/**
 * 레시피 댓글 등록 쿼리
 */
export const useRecipeCommentMutation = () => {

    const queryClient = useQueryClient();

    const regist = useMutation({
        mutationFn: ({recipeId,comment}) => createRecipeComment({recipeId,comment}),
        onSuccess: (data) => {
            console.log(data);
            // 댓글 등록 성공 시 쿼리 무효화 및 새로고침
            queryClient.invalidateQueries(['recipeComment']);
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const addComment = ({recipeId,comment}) => {
        regist.mutate({recipeId,comment});
    }

    return { addComment };
}

/**
 * 레시피 댓글 조회 쿼리
 */
export const useRecipeCommentQuery = ({recipeId, page}) => {
    const {data, error, isLoading} = useQuery({

        queryKey: ['recipeComment',page],
        queryFn: () => readRecipeComment({recipeId, page}),
        retry: false
    })

        return{
            data, error, isLoading
        } 
}