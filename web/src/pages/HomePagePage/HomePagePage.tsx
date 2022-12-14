import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import EnhancedTable from 'src/components/table/table.component'

const HomePagePage = () => {
  return (
    <>
      <MetaTags title="HomePage" description="HomePage page" />

      <h1>HomePagePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePagePage/HomePagePage.tsx</code>
      </p>
      <p>
        My default route is named <code>homePage</code>, link to me with `
        <Link to={routes.homePage()}>HomePage</Link>`
      </p>
      <EnhancedTable/>
    </>
  )
}

export default HomePagePage
