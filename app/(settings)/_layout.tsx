
import React from 'react'
import { Stack } from 'expo-router'

const SettingsLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="account" options={{ headerShown: true, title: 'Back To Settings Page!' }} />
      </Stack>
    </>
  )
}

export default SettingsLayout