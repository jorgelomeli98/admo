import { Link as RouterLink } from "react-router-dom";

export interface SmartLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  target?: string;
  className?: string;
  icon?: React.ElementType;
  children?: React.ReactNode;
}

export const SmartLink = ({
  to,
  href,
  target,
  className,
  icon: Icon,
  children,
  ...props
}: SmartLinkProps) => {
  const finalTarget = target ?? "_blank";
  if (to) {
    if (to.startsWith("#")) {
      return (
        <a href={to} className={className} {...props}>
          {Icon && <Icon size={16} />}
          {children}
        </a>
      );
    }
    return (
      <RouterLink to={to} className={className} {...props}>
        {Icon && <Icon size={16} />}
        {children}
      </RouterLink>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={finalTarget}
      rel="noopener noreferrer"
      {...props}
    >
      {Icon && <Icon size={16} />}
      {Icon ? " " + children : children}
    </a>
  );
};
