"use client"

import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({post}) {
    
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={post.url} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text style={{color:"black"}}>
          {post.description}
        </Card.Text>
        <Link href={`post/${post?._id}`} passHref>
              <button>Read more</button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;