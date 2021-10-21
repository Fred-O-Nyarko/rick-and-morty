import React from 'react';
import NextLink, { LinkProps } from 'next/link';

const Link: React.FC<LinkProps & React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  href,
  className,
  children,
}) => {
  return (
    <div className={className}>
      <NextLink href={href}>{children}</NextLink>
    </div>
  );
};

export default Link;
