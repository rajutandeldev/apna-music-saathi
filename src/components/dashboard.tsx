import React from 'react'
import Sidebar from './sidebar'
import MainContent from './mainContent'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 flex-1">
      <Sidebar/>
      <MainContent/>
    </div>
  )
}
