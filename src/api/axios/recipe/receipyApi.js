import { useAppSelector } from "../../../RootStore";
import API from "../../interceptor/API";


/**
 * 레시피 메타데이터 조회 API
 * @author 소연
 */
export const getRecipeMetaData = async () => {
  try {
      const response = await API.get('/recipe/metadata');
      return response.data;
    } catch (error) {
        throw error;
    }
  };


/**
 * 레시피 등록 API
 * @author 소연
 */
  export const postRecipe = async (recipeData) => {
    try {
      const response = await API.post(
        '/recipe/register',
        recipeData,
        { headers: {"Content-Type": 'multipart/from-data'} },
        {withCredentials: true} //CORS
      );
      return response;
    } catch (error) {
        throw error
    }
  }

  /**
   * 내 레시피 조회 API
   * 사용자 닉네임으로 검색
   */
  export const getMyRecipe = async () => {
    try {
      const response = await API.get(
        '/recipe/me',      
        {
          params: {page: 0}
        }
      );
        return response.data;
    } catch (error) {
      throw error;
    }
  }

/**
 * 레시피 목록 조회
 * @description 레시피 검색조건 : 레시피 이름(name)
 */
export const getRecipeListByName = async({page, recipeName}) => {

  try {
    const response = await API.get(
      '/recipe/search',      
      {
        params: {
          name: recipeName,
          page: page
        }
      }
    );
      console.log(response.data);
      return response.data;
  }
  catch (error) {
    throw error;
  }
}

/**
 * 레시피 목록 조회
 * @description 레시피 검색조건 : 닉네임(nickname)
 */
export const getRecipeListByNickname = async({page, nickName}) => {
  try {
    const response = await API.get(
      '/recipe/member/search',      
      {
        params: nickName === "" ? { page: page } : { page: page, nickname: nickName }
      }
    );
      console.log(response.data);
      return response.data;
  }
  catch (error) {
    throw error;
  }
}

/**
 * 레시피 상세조회 API
 */
export const getRecipeDetail = async(recipeId) => {
  try {
    const response = await API.get(
      `/recipe/guest/${recipeId}`,      
    );
      console.log(response.data)
      return response.data;
  }
  catch (error) {
    throw error;
  }
}