import { View, Text } from 'react-native'
import React from 'react'
import { supabase } from '../supabases'

interface ProfileUpdate {
  display_name?: string,
  bio?: string,
}

interface PostUpdate {
  post?: string,
}

// Update User Profile
export const updateProfile = async (userId: string, updates: ProfileUpdate): Promise<boolean> => {

  const { error } = await supabase
    .from("profiles")
    .update(updates) // Only update provided fields
    .eq("id", userId); // Ensure the correct user is updated

  if (error) {
    console.error("Error updating profile:", error.message);
    return false;
  }
  return true;
}

//Insert Post
export const insertPost = async (userId: string, post: string): Promise<boolean> => {
  console.log("Content: ", post);
  const { error } = await supabase
    .from('post')
    .insert([
      {
        id: userId,
        content: post
      }
    ])
    .single();

  if (error) {
    console.error("Error inserting post:", error);
    return false;
  }

  return true;
}

// Update a Post by ID
export const updatePost = async (postId: string, updates: PostUpdate): Promise<boolean> => {
  const { error } = await supabase
    .from("posts")
    .update(updates)
    .eq("postId", postId); // Ensure we update the correct post

  if (error) {
    console.error("Error updating post:", error.message);
    return false;
  }
  return true;
};