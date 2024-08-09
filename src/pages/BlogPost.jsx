import { useParams, Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', content: 'This is the content of my first blog post. It\'s exciting to start this journey of sharing my thoughts and experiences with the world. I hope you\'ll find something interesting or useful here!', date: '2023-04-01' },
  { id: 2, title: 'Reflections on Life', content: 'Life is a journey full of ups and downs. It\'s important to take time to reflect on our experiences and learn from them. In this post, I share some of my recent reflections and what they\'ve taught me.', date: '2023-04-15' },
  { id: 3, title: 'The Joy of Coding', content: 'Coding is more than just a job for me - it\'s a passion. The process of creating something from nothing, solving complex problems, and constantly learning new things brings me immense joy. Here\'s why I love programming so much.', date: '2023-05-01' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.date}</p>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
        <Link to="/" className="mt-8 inline-block text-blue-500 hover:underline">
          &larr; Back to all posts
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
