import { View, Text } from 'react-native'
import React from 'react'
import { supabase } from '../supabases'

export async function FetechUser() {

  const { data, error } = await supabase.auth.getUser();

  if(error){
    console.error("Error fetching user: ", error);
    return null;
  }
  return data.user;
}