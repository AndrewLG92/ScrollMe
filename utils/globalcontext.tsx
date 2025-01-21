import { View, Text } from 'react-native'
import React, { createContext, useContext, useState, useEffect, ReactNode} from 'react'
import { supabase } from './supabases';
import { User, SupabaseClient } from '@supabase/supabase-js'
import { router } from 'expo-router';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  supabase: SupabaseClient;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {
  children?: ReactNode
}

export const AuthProvider = ({children}: Props) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //check user
    checkUser();

    const { data: authListener} = supabase.auth.onAuthStateChange(async (event, session) =>{
      
      if(event === "INITIAL_SESSION" || event === 'SIGNED_IN'){
        setUser(session?.user ?? null);
        router.replace('/profile');
      }else if(event === 'SIGNED_OUT'){
        setUser(null);
        router.replace('/');
      }
      setLoading(false);
    });

    return () => authListener.subscription.unsubscribe();
  }, [])

  const checkUser = async () => {
    const session = await supabase.auth.getSession();
    console.log(session.data.session);
    if(session.data.session) {
      setUser(session.data.session.user);
      router.replace('/profile');
    }else{
      router.replace('/');
    }
    setLoading(false);
  }

  const value = { user, loading, supabase};
  //console.log(`AuthProvider value: ${user}, ${loading}`);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  //console.log(`useAuth Context: ${context}`);
  if(context === undefined){
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
