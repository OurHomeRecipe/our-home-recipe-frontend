import API from "../../interceptor/API"

/**
 * 레시피 댓글 등록 API
 */
export const createRecipeComment = async ({recipeId,comment}) => {
    try {
        const response = await API.post(
            '/recipe/comment',
            {recipeId,comment},
            {withCredentials: true} //CORS
        );
        return response.data;
    } catch (error) {
        throw(error)
    }
}

/**
 * 레시피 댓글 조회 API
 */
export const readRecipeComment = async ({recipeId, page}) => {
    try {
        const response = await API.get(
            '/recipe/comment',
            {params: {
                recipeId: recipeId,
                page: page
            }}
        );
        return response.data;
    } catch (error) {
        throw(error)
    }
}

/**
 * 레시피 댓글 수정 API
 */
// export const updateRecipeComment = async () => {
//     try {
//         const response = await API.get('');
//         return response.data;
//     } catch (error) {
//         throw(error)
//     }
// }

/**
 * 레시피 댓글 삭제 API
 */
// export const deleteRecipeComment = async () => {
//     try {
//         const response = await API.get('');
//         return response.data;
//     } catch (error) {
//         throw(error)
//     }
// }