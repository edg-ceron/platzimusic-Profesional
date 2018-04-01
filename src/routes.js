import Search from '@/components/search'
import About from '@/components/about'
import TrackDetail from '@/components/trackDetail'

const routes = [
  {path: '/', component: Search, name: 'search'},
  {path: '/about', component: About, name: 'about'},
  {path: '/track/:id', component: TrackDetail, name: 'track'},
]
export default routes
