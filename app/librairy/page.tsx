import React from 'react'
import LibraryPage from './LibrairyPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Librairy | IT Knowledge Hub",
  description: "The Knowledge Hub of ImpacTune",
};

function page() {
  return (
    <div>
      <LibraryPage/>
    </div>
  )
}

export default page