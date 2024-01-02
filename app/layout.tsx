import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "sonner";

import { StackedLayout } from "@/components/layouts/stacked-layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [
		{
			name: "Jiramarc",
			url: "https://jiramarc.vercel.app",
		},
	],
	creator: "Jiramarc",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

type RootLayoutProps = React.HTMLAttributes<HTMLHtmlElement> & {};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<head />
			<body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<StackedLayout>{children}</StackedLayout>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
