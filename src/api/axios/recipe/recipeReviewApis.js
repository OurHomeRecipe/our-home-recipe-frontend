import API from "../../interceptor/API"

/**
 * 레시피 리뷰 등록 API
 */
export const createRecipeReview = async ({recipeId,content, rating}) => {
    try {
        const response = await API.post(
            '/recipe/review',
            {recipeId, content, rating},
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
export const readRecipeReview = async ({recipeId, page}) => {
    try {
        const response = await API.get(
            '/recipe/review',
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