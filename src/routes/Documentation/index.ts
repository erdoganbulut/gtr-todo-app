import Loadable from 'react-loadable';

import Loading from '../../components/Loading';

const LoadableDocumentation = Loadable({
  loader: () => import('./Documentation'),
  loading: Loading,
});

export default LoadableDocumentation;
