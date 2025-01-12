import Typography from "../elements/text/Typography";
import {FiMessageCircle} from "react-icons/fi";
import {RiThumbUpLine} from "react-icons/ri";

const PopularBlogs = ({className = ""}) => {
  return (
    <div className={`bg-white p-5 border rounded shadow-md ${className}`}>
      <Typography className="text-xl font-bold mb-5">Popular Blogs</Typography>

      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <Typography className="font-bold mb-2">{blog.title}</Typography>
            </div>

            <Typography className="text-gray-600">
              Publish by {blog.author}
            </Typography>

            <div className="flex items-center mt-2">
              <FiMessageCircle size={20} />
              <Typography className="text-gray-500 mr-5 ml-1">
                {blog.comments}
              </Typography>

              <RiThumbUpLine size={20} />
              <Typography className="text-gray-500 mr-2 ml-2">
                {blog.likes}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;

const blogs = [
  {
    title: "My Amazing Blog Title 1",
    author: "Jorgon",
    likes: 121,
    comments: 22,
  },
  {
    title: "My Amazing Blog Title 2",
    author: "Ahmad",
    likes: 822,
    comments: 1200,
  },
  {
    title: "My Amazing Blog Title 3",
    author: "Sanusi",
    likes: 822,
    comments: 10,
  },
];
