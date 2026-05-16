import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero container text-center">
      <h1 className="text-h1">404</h1>
      <p>Page not found.</p>
      <Link to="/" className="button-primary mt-4 inline-block">
        Go Home
      </Link>
    </section>
  )
}
