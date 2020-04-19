var express = require('express');
var router = express.Router();
const blog = require('../controllers/blog');

router.get('/', blog.createBlog);
router.post('/', blog.saveBlog);
router.get('/:id', blog.showBlog);

module.exports = router;
