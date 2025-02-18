"use client" 

import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { useRouter } from 'next/navigation'
import config from '../src/amplifyconfiguration.json'

Amplify.configure(config);

export function Home({ signOut, user }: WithAuthenticatorProps) {
  const router = useRouter()
  
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <button  onClick={() => router.push('/fabric')}>Push me</button>
    </>
  );
}

export default withAuthenticator(Home);