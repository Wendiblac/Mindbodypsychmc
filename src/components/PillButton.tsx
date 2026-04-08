import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type PillButtonVariant = "solid" | "outline";
type PillButtonSize = "nav" | "nav-wide" | "action";

interface BasePillButtonProps {
  children: ReactNode;
  className?: string;
  size?: PillButtonSize;
  variant?: PillButtonVariant;
}

type PillButtonAsButton = BasePillButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type PillButtonAsAnchor = BasePillButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type PillButtonProps = PillButtonAsButton | PillButtonAsAnchor;

function isAnchorProps(props: PillButtonProps): props is PillButtonAsAnchor {
  return typeof (props as PillButtonAsAnchor).href === "string";
}

function getClassName({
  className,
  size = "action",
  variant = "solid",
}: BasePillButtonProps) {
  return ["pill-button", `pill-button--${size}`, `pill-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");
}

export function PillButton(props: PillButtonProps) {
  if (isAnchorProps(props)) {
    const { children, className, size, variant, href, ...anchorProps } = props;

    return (
      <a href={href} className={getClassName({ className, size, variant, children })} {...anchorProps}>
        <span>{children}</span>
      </a>
    );
  }

  const { children, className, size, variant, type, ...buttonProps } = props;
  const buttonType =
    type === "submit" || type === "reset" || type === "button" ? type : "button";

  return (
    <button
      type={buttonType}
      className={getClassName({ className, size, variant, children })}
      {...buttonProps}
    >
      <span>{children}</span>
    </button>
  );
}
