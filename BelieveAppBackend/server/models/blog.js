var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var blogSchema = new Schema({
  blog_title                      : String,
  category                        : { type: String , ref:'BlogCategory' },
  blog                            : String,
  blog_image                      : String,
  status                          : String
},
{
  timestamps: true 
});

  var Blog           		          = mongoose.model('Blog',blogSchema);
  module.exports                  = Blog;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewBlog  = function(params,callback){
            var new_blog  = new Blog(params);  
            new_blog.save(callback);
    }

    module.exports.getAllBlogsByAdmin  = function(callback){
          Blog.find({status : 'A'})
          .populate('category')
          .exec(callback) ;   
    }
   
   module.exports.getDraftBlogsByAdmin  = function(callback){
          Blog.find({status : 'S'})
          .populate('category')
          .exec(callback) ;   
    }
     module.exports.getBlogDetailByAdmin  = function(params,callback){
          Blog.findById(params.blog_id) 
          .populate('category')
          .exec(callback)      
    }
    
     module.exports.deleteBlog  = function(id,callback){
          Blog.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
     }
     module.exports.publishBlog  = function(id,callback){
          Blog.findByIdAndUpdate(id, {status : 'A'},{new:true} ,callback);
     }

/////////////////////////// APP END /////////////////////////

    module.exports.getAllBlogs  = function(callback){
          Blog.find({status : 'A'})
          .populate('category','name')
          .sort('-createdAt')
          .exec(callback);   
    }

     module.exports.getBlogDetail  = function(params,callback){
          Blog.findById(params.blog_id, callback)      
    }

     module.exports.getAdviceSection  = function(id,callback){
          Blog.find({category : id, status : 'A'})   
          .populate('category','name')
          .sort('-createdAt')
          .exec(callback);   
    }

   module.exports.getGivingBlogs  = function(giving_id,callback){
          Blog.find({category : giving_id, status : 'A'}, callback)      
    }

