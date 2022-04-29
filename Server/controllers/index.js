import tweets from "../Models/index.js";
export const getTweets = async (req, res) => {
    try {
        const tweet = await tweets.find();
        console.log(tweet);
        res.status(200).json(tweet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTweet = async (req, res) => {
    const tweet = req.body;
    const newTweet = new tweets(tweet);
    try {
        await newTweet.save();
        res.status(201).json(newTweet);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}