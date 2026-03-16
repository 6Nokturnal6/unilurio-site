import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <img src="/logo.png" alt="Logo" width="120" />
      <nav>
        <Link href="/">Home</Link> |
        <Link href="/about">About</Link> |
        <Link href="/admissions">Admissions</Link> |
        <Link href="/faculties">Faculties</Link> |
        <Link href="/news">News</Link> |
        <Link href="/research">Research</Link> |
        <Link href="/students">Students</Link>
      </nav>
      <hr />
    </header>
  );
}
