import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from './history';
import { SceneChat, SceneLobby, SceneBoth } from './scenes';
import { store } from './store';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path="/" component={SceneLobby} />
        <Route path="/chat" component={SceneChat} />
        <Route path="/all" component={SceneBoth} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
