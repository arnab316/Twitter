import CommentService  from '../services/comment-service.js';


const commentService = new CommentService();


export const createComment = async (req,res) => {
    try {
        const tweet = await commentService.create(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(201).json({
            success: true,
            data: tweet,
            message: 'Comment created successfully',
            error: {}
        });
    } catch (error) {
    return res.status(500).json({
        success: false,
        data: {},
        message: 'An error occurred while creating the tweet',
        error: error.message || 'Internal Server Error'
    })
    }
}
