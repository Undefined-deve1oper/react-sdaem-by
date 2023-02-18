const Post = require("../models/Post");

class PostController {
    async create(req, res) {
        try {
            let { title, previewTextrice, fullText, image, author } = req.body;

            const post = await Post.create({
                title,
                previewTextrice,
                fullText,
                image,
                author
            });

            return res.json(post);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async getAll(req, res) {
        try {
            let { limit, page } = req.query;
            page = page;
            limit = limit;
            let offset = page * limit - limit;

            const posts = await Post.find().skip(offset).limit(limit);
            const count = await Post.find().count();

            res.status(200).send({
                totalCount: count,
                entities: posts
            });
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async getOne(req, res) {
        try {
            const { postId } = req.params;
            const post = await Post.findById(postId);
            res.status(200).send(post);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }
}

module.exports = new PostController();
