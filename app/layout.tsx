import type {Metadata} from "next";
import React from "react";
import {Inter} from "next/font/google";
import "./globals.css";
import MainNavbar from "./components/MainNavbar";
import TelegramProvider from "./context/TelegramContext";
import Script from "next/script";
import { Telegram } from "@twa-dev/types"

declare global {
    interface Window {
        Telegram: Telegram;
    }
}

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Mini MMORPG App",
    description: "Be the hero! Go to the dungeons, fight to bosses, be more powerful!",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <Script
                src="/js/telegram-web-app.js" // Замените на URL вашего скрипта
                strategy="beforeInteractive"
            />
            <title></title>
        </head>
        <body className={inter.className}>
        <header>
        </header>
        <TelegramProvider>
            <main>{children}</main>
        </TelegramProvider>
        <footer>
        <MainNavbar/>
        </footer>
        </body>
        </html>
    );
}
