/**
 * Created by Yun on 2015-11-29.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Site from './pages/Site';
import NotFound from './pages/NotFound';

import Index from './pages/Index';
import Page from './pages/Page';

import DocRoot from './pages/docs/Site';

import bbsRedirect from './bbsRedirect.json';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={Site}>
      <IndexRoute component={Index} />
      <Route path="about.html" component={Page}/>
      <Route path="bbs">
        <IndexRoute redirect="http://bbs.react-native.cn/" />
        <Route path="post/:postId" getRedirect={({postId})=>(bbsRedirect.redirects[postId] || 'http://bbs.react-native.cn/')} />
      </Route>
      <Route path="docs" component={DocRoot}>
        <IndexRoute onEnter={(nextState, replaceState)=>{replaceState(null, '/docs/getting-started.html');}} />
        <Route path=":docid" component={Page} />
      </Route>
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
