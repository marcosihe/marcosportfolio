import BaseLayout from '../../components/layout/BaseLayout'
import { useRouter } from 'next/router'

const Portfolio = () => {
    const router = useRouter();

  return (
    <BaseLayout>
    <h2>PortfolioDetail Page</h2>
    <h2>{router.query.id}</h2>
    </BaseLayout>
  )
}

export default Portfolio