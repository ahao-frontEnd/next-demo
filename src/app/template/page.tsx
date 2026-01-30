export default function Template() {
  const posts = [
    { id: 1, title: "First template Post", excerpt: "This is the first post." },
    { id: 2, title: "Second template Post", excerpt: "Another interesting story." },
    { id: 3, title: "Final Thoughts", excerpt: "Concluding the template list." }
  ];

  return (
    <div>
      <h1>template</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "1.5rem" }}>
            <h2>
              <a href={`/template/${post.id}`} style={{ textDecoration: 'underline', color: 'inherit' }}>
                {post.title}
              </a>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}