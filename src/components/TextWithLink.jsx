import Link from 'next/link';

const TextWithLink = ({text, textLink, href}) => {
  return (
    <div className="text-center text-[13px]">
      <span className="text-white font-semibold">{text}</span> {" "}
      <Link href={href || '/'} className="text-[#E0C796] font-semibold underline">{textLink}</Link>
    </div>
  );
};

export default TextWithLink;
