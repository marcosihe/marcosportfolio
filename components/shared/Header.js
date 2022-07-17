import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/portfolios">
        <a>Portfolios</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/cv">
        <a>CV</a>
      </Link>
    </>
  );
};

export default Header;
