const indexString = `import Link from 'next/link';

function HomePage() {
  return <div>
<<<<<<< HEAD
=======
    <Link href='/signup'>
    <button>Sign-Up</button>
    </Link>
>>>>>>> 71d0323469dbbe603f80d3b5de1ac31222c46389
    <h1>Welcome to your UpNext Application Home Page!</h1>
    <p>To edit this page, add to index.js in your pages directory.</p>
  </div>
}

export default HomePage;
`;

export = indexString;
