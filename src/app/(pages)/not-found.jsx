import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '150px', color:"white", position:"relative", zIndex:"9", mixBlendMode:"difference"}}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you're looking for.</p>
      <Link href="/" style={{ fontWeight:"bold", color: 'red', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  );
}