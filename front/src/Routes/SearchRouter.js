import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {SearchItemList, SearchItemInfo} from './index';

const SearchRouter = ({match}) =>(
    <BrowserRouter>
        <Switch>
            <Route exact path={match.url} component={SearchItemList} />
            <Route path={`${match.url}/:id`} component={SearchItemInfo} />
        </Switch>
    </BrowserRouter>
)

export default SearchRouter;