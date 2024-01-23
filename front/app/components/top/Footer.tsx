import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-footer font-notoSans text-black">
      <div className="flex flex-col items-center py-8">
        <div className="mb-4">
          <Link
            href="/"
            className="transition transform hover:scale-105 ease-in duration-800"
          >
            <Image
              src="/yoga_zukan_logo.png"
              width={100}
              height={80}
              alt="ヨガ図鑑"
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>

        <nav className="space-x-6 mb-3">
          <Link
            href="/"
            data-testid="privacy-policy"
            className="hover:opacity-50 transition-all duration-100"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="/"
            data-testid="terms-of-service"
            className="hover:opacity-50 transition-all duration-100"
          >
            利用規約
          </Link>
          <Link
            href="/faq"
            data-testid="faq"
            className="hover:opacity-50 transition-all duration-100"
          >
            よくあるご質問
          </Link>
        </nav>
        <small className="text-xs md:text-base">© 2024 yogazukan</small>
      </div>
    </footer>
  );
};

export default Footer;
