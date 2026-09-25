import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-site text-center">
        <p className="eyebrow">404</p>
        <h1 className="h-section mt-2">This page doesn't exist.</h1>
        <p className="lede mt-4">The link may be old or mistyped.</p>
        <Link to="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
