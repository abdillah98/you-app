import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, useGradient}) => {
  return (
    <div className={`relative min-h-screen w-full sm:max-w-[375px] sm:mx-auto bg-[#09141A] px-[23px] py-[40px] ${inter.className} ${useGradient ? 'bg-gradient' : 'bg-[#09141A]'}`}>
      {children}
    </div>
  );
};

export default Layout;
