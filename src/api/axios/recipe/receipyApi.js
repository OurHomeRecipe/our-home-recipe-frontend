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