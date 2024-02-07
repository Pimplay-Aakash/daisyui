import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-purple-800 text-white py-4'>
        <div className='container mx-auto'>
            <div className='flex justify-between'>
                <Link href='/'>
                    <h1 className='text-2xl font-bold'>Daisy UI</h1>
                </Link>
                <ul className='flex justify-end items-center font-bold space-x-5 tracking-wide'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/login'>Login</Link></li>
                    <li><Link href='/model'>Model</Link></li>

                </ul>

            </div>

        </div>
         
    </header>
  )
}

export default Header