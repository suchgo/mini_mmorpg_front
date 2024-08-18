'use client'
import React, { createContext, useEffect, useState } from 'react';
import NonInTelegram from "@/app/components/NonInTelegram";

const TelegramContext = createContext<any>(null);

const TelegramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [telegram, setTelegram] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Telegram !== null) setTelegram(window.Telegram.WebApp);

        return () => {
            window.Telegram.WebApp.ready();
        };
    }, []);

    return (
        <TelegramContext.Provider value={telegram}>
            {!telegram ? (
                <div className="loading-container">
                    <p>Загрузка...</p>
                </div>
            ) : !telegram.initDataUnsafe.user ? (
                <NonInTelegram />
            ) : children}
        </TelegramContext.Provider>
    );
};

export default TelegramProvider;
