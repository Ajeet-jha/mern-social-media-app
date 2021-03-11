import PostMessage from '../modules/postMessage.js'

export const getPost = async (req, res) => {
    try {
        const postMessages =  await PostMessage.find();

        res.sendStatus(200).json(postMessages)
    } catch (error) {
        res.sendStatus(404).json({message: error.message})
    }
   
}

export const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new PostMessage(post)
    try {
         await newPost.save();

        res.sendStatus(200).json(newPost)
    } catch (error) {
        res.sendStatus(409).json({message: error.message})
    }
   
}