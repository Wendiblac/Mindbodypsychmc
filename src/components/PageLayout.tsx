import type { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import type { AssetVariant } from "../data/siteData";

interface PageLayoutProps extends PropsWithChildren {
  headerButtonVariant?: AssetVariant;
  logoVariant?: AssetVariant;
  footerLogoVariant?: AssetVariant;
}

export function PageLayout({
  children,
  headerButtonVariant = "svg",
  logoVariant = "svg",
  footerLogoVariant = logoVariant,
}: PageLayoutProps) {
  return (
    <>
      <Header buttonVariant={headerButtonVariant} logoVariant={logoVariant} />
      <main>{children}</main>
      <Footer logoVariant={footerLogoVariant} />
    </>
  );
}
