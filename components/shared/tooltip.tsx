import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

export default function Tooltip({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode | string;
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          side="top"
          className="animate-slide-up-fade inline-flex items-center rounded-md px-4 py-2.5 z-20 bg-white border border-gray-200 drop-shadow-lg"
        >
          <TooltipPrimitive.Arrow className="fill-current text-white" />
          {typeof content === "string" ? (
            <span className="block text-sm text-center text-gray-700 max-w-xs">
              {content}
            </span>
          ) : (
            content
          )}
          <TooltipPrimitive.Arrow className="fill-current text-white" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

/***********************************/
/*  Tooltip Contents  */

import Link from "next/link";
import BlurImage from "@/components/shared/blur-image";

export function TooltipContent({
  title,
  cta,
  ctaLink,
}: {
  title: string;
  cta: string;
  ctaLink: string;
}) {
  return (
    <div className="max-w-xs flex flex-col text-center items-center space-y-3 py-2">
      <p className="text-sm text-gray-700">{title}</p>
      <Link href={ctaLink}>
        <a className="py-1.5 px-3 bg-black hover:bg-white rounded-full border border-black text-sm text-white hover:text-black transition-all mt-4">
          {cta}
        </a>
      </Link>
    </div>
  );
}

export function OGImageProxy() {
  return (
    <div className="max-w-md flex flex-col text-center items-center space-y-5 p-5">
      <BlurImage
        alt="Demo GIF for OG Image Proxy"
        src="https://res.cloudinary.com/dubdotsh/image/upload/v1664425639/og-image-proxy-demo.gif"
        width={1200}
        height={1084}
        className="w-full rounded-md overflow-hidden shadow-md"
      />
      <p className="text-sm text-gray-700">
        Add a custom OG image in front of your target URL. Bots like
        Twitter/Facebook will be served this image, while users will be
        redirected to your target URL.
      </p>
    </div>
  );
}
