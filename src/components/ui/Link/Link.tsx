import NextLink, { LinkProps as NextLinkProps } from "next/link";

const Link: React.FC<NextLinkProps & { className?: string }> = ({ href, children, className, ...props }) => {
  return (
    <NextLink href={href}>
      <a className={`${className}`} {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
