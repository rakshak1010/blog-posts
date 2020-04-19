const Blog = require("../models/blog");


module.exports = {
	createBlog: (req, res) => {
		res.render('compose');
	},

	saveBlog: (req, res) => {
		const blog = new Blog({
			title: req.body.title,
			post: req.body.post
		});

		blog.save((err, blog) => {
			if(err){
				console.log(err);
				res.send(err);
			}else{
				res.redirect('/');
			}
		})
	},

	showBlog: (req, res) => {
		var id = req.params.id;

		Blog.findById(id, (err, blog) => {
			if(err){
				console.log(err);
				res.send(err);
			}else{
				if(blog){
					res.render('post', {blog: blog});
				}else{
					res.send("Invalid id params passed.\nBlog does not exist.");
				}
			}
		});
	}
};