import { injectReducer } from '../../store/reducers';
import { PortfolioView } from './components/PortfolioView'

export default (store) => ({
  path : 'portfolio',
  component: PortfolioView
})
