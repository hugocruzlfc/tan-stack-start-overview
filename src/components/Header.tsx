import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <>
      <header className="flex items-center bg-gray-800 p-4 text-white shadow-lg">
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">home</Link>
        </h1>
      </header>
    </>
  )
}
