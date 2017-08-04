import { injectReducer } from '../../store/reducers';
import { ContactView } from './components/ContactView'

export default (store) => ({
  path : 'contact',
  component: ContactView
})
