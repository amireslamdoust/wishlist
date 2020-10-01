import React from 'react'

type LayoutProps = {
  children: React.ReactChild[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="bg-white antialiased font-sans overflow-auto"
      // style={{ pointerEvents: 'unset', cursor: 'none' }}
    >
      <div className="relative">{children}</div>
    </div>
  )
}

export default Layout
