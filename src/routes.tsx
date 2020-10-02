import loadable from '@loadable/component'

export default [
  {
    path: '/',
    component: loadable(() => import('./pages/Index')),
    exact: true,
  },
  {
    path: '/setting',
    component: loadable(() => import('./pages/Setting')),
    exact: true,
  },
  {
    path: '/favorites',
    component: loadable(() => import('./pages/Favorites')),
    exact: true,
  },
]
