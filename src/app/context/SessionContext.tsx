"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Session as SupabaseSession } from '@supabase/supabase-js'

// Used GPT for the typing
export type Session = SupabaseSession | null

interface SessionContextType {
    session: Session;
    setSession: Dispatch<SetStateAction<Session | null>>;
}

const SessionContext = createContext<SessionContextType | null>(null);


export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {

        const getSession = async () => {
            const { data: sessionData  } = await supabase.auth.getSession()
            setSession(sessionData.session)
        }
        
        getSession()
    }, [])

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    )
};

export const useSession = () => {
    const context = useContext(SessionContext)
    if (!context) {
        throw new Error("useSession must be used within a SessionProvider");
    }

    return context
}