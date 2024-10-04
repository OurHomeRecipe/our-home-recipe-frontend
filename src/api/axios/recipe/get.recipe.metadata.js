//레시피 메타데이터 조회

import API from "../../interceptor/API";



export const recipeMetaDataAPI = async () => {
  try {
    const response = await API.get('/recipe/metadata');
      return response.data;
    } catch (error) {
        console.error('메타데이터 조회 실패:', error);
        throw error;
    }
  };