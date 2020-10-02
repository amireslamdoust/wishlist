import React from 'react'

type LayoutProps = {
  children: React.ReactChild[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-black antialiased font-sans overflow-auto">
      <div className="relative">{children}</div>
    </div>
  )
}

export default Layout
