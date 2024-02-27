import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';

export default function BlogPosts({posts, metadata}): JSX.Element {
  return (
    <div>
      {posts.map(({content: BlogPostContent}) => (
        <BlogPostItem 
            key={BlogPostContent.metadata.permalink} 
            // frontMatter={BlogPostContent.frontMatter} 
            // metadata={BlogPostContent.metadata} 
            // truncated
            >
          <BlogPostContent />
        </BlogPostItem>
      ))}
      <BlogListPaginator metadata={metadata} />
    </div>
  );
}
