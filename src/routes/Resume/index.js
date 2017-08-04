import { injectReducer } from '../../store/reducers';
import { ResumeView } from './components/ResumeView'

export default (store) => ({
  path : 'resume',
  component: ResumeView
})
