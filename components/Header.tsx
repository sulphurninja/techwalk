import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="w-44 object-contain cursor-pointer " src="/thelogo2.png" alt="man reading technology feed, news and walking."  />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5 ">
                <a href="/about">About</a>
                <h2>Contact</h2>
                <h3 className="text-white cursor-pointer bg-green-700 px-4 py-1 rounded-full">Follow</h3>
            </div>

        </div>
       <div className="flex items-center space-x-5  text-green-700">
        <Link href='/privacy'>
        <h3 className="cursor-pointer">Privacy</h3>
        </Link>
        <Link href='/about'>
        <h3 className="cursor-pointer">About Us</h3>
        </Link>
        <a href="https://www.thetechwalk.com/post/node-js-frameworks-you-should-know" className="border px-4 py-1 rounded-full cursor-pointer border-green-700">Featured</a>
       </div>
       
      
    </header>
  )
}

export default Header
