import { createBrowserHistory, Location, Action } from 'history';

let basename: string = '/';

export const history = createBrowserHistory({
    basename
});

history.listen((location: Location, action: Action) => {
    console.log('location', location)
    console.log('action', action)
})