import {Request, Response, Router} from 'express';

import Post from '../models/Post';

class PostRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();

    }

    async getPosts(req: Request, res: Response){
       const posts = await Post.find();
       res.json(posts);
    }

    getPost(req: Request, res: Response){
       

    }

    createPost(req: Request, res: Response) {
        console.log(req.body);
        res.json('Received');

    }

    updatePost() {

    }

    deletePost() {

    }

    routes(){
        this.router.get('/', this.getPosts);
        this.router.get('/:url', this.getPosts);
        this.router.post('/', this.createPost);
        this.router.put('/url:', this.updatePost);
        this.router.delete('/url:', this.deletePost);

    }

}

const postRoutes = new PostRoutes();
export default postRoutes.router;

