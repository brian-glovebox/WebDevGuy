import Main from './components/Main/Main';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core/styles';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';
import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';
import { render } from 'react-dom';
import Layout from './components/Layout/Layout';
const browserHistory = createBrowserHistory();


const App = (): JSX.Element => {
  return (
    <>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' render={props => (
            <Layout
              {...props}
              component={Main}
              layout={Main}
            />
          )}
          />
    </Switch>

      </Router>
    </>
  );
}

export default App;
