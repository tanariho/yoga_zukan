import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-tetsuguro font-notoSans text-black'>
      <div className='flex flex-col justify-center items-center md:py-8 py-4'>
        <nav className='space-x-6 md:mb-3 mb-2 md:text-base text-xs'>
          <Link
            data-testid='privacy-policy'
            href='/'
            className='hover:opacity-50 transition-all duration-100'
          >
            プライバシーポリシー
          </Link>
          <Link
            data-testid='terms-of-service'
            href='/'
            className='hover:opacity-50 transition-all duration-100'
          >
            利用規約
          </Link>
          <Link
            data-testid='faq'
            href='/faq'
            className='hover:opacity-50 transition-all duration-100'
          >
            よくあるご質問
          </Link>
        </nav>
        <small className='md:text-base text-xs'>© 2024 yogazukan</small>
      </div>
    </footer>
  )
}

export default Footer