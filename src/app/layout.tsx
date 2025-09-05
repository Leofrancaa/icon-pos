import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ImplantoEdu - Especialização em Implantodontia",
  description:
    "Curso de pós-graduação em Implantodontia com metodologia prática, professores experientes e certificação reconhecida. Transforme sua carreira na odontologia.",
  authors: [{ name: "ImplantoEdu" }],
  keywords: [
    "implantodontia",
    "curso",
    "pós-graduação",
    "odontologia",
    "implantes dentários",
    "especialização",
  ],
  openGraph: {
    title: "ImplantoEdu - Especialização em Implantodontia",
    description:
      "Curso de pós-graduação em Implantodontia com metodologia prática, professores experientes e certificação reconhecida.",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
        width: 1200,
        height: 630,
        alt: "ImplantoEdu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
