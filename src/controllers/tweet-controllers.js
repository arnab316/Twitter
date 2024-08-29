import TweetService  from '../services/tweet-services.js';


const tweetService = new TweetService();
export const createTweet = async (req,res) => {
    try {
        const tweet = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            data: tweet,
            message: 'Tweet created successfully',
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



export const getTweet = async(req, res) =>{
    try {
        const tweet = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            data: tweet,
            message: 'Tweet fetched successfully',
            error: {}
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: {},
            message: 'An error occurred while getting tweet',
            error: error.message || 'Internal Server Error'
        })
    }
}