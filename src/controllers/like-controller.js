import LikeService from "../services/like-service.js";

const likeService = new LikeService();
export const toggleLike = async(req,res) => {
     try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Like toggled successfully',
            error: {}
        })
     } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: {},
            message: 'An error occurred while toggling the like',
            error: error.message || 'Internal Server Error'
        })
     }
}