//레시피 메타데이터 조회

import API from "../../interceptor/API";



export const getRecipeMetaData = async () => {
  try {
    const response = await API.get('/recipe/metadata');
      return response.data;
    } catch (error) {
        throw error;
    }
  };