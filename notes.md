React
=====

28 Nov also 2, 3 Dec
 9:30 start
11:00 coffee break
12:30-1:30 lunch
 3:00 tea break
 4:30 end

Node 20.17
Node 20.19 << minimum

Toby Dussek


Friday
> Welcome
> Check setup
> what version of React?
>    npm list react (within a React project)
> plan what to do
> React: what, how
> props and state
> Always good practice
> Performance

Editing vite.config.js for path, set port, joyUI ... imports...., base folder, export default, target proxy (for wether forecast)

Environment set-up 
> IIS web server to publish site
> dev-side can start and debug

Tuesday
> quick consolidation of what we did
> list and iterating (key)
> architecture for non-trivial apps
> After Lunch
> tidy up map example (trades)
> see ongoing project...
> where does the data come from?
  > how ECMAScript consumes remote data from an API server
  > using fetch two ways: using async-await also fetch.then.then
  > incorporating this into React with useEffect()
  > along the way we will meet back-tick syntax
> homework
  > get your weather server working, so it returns some JSON
  > you will know it is working when you can browse to it and see some JSON
  > after that, wire up the React to useEffect and grab you JSON data
> modern ES syntax: back-ticks, functions, let/const, rest/spread
> useState for non-trivial data structures
> re-paint on change: the virtual DOM

Tutorial: Create an ASP.NET Core app with React in Visual Studio
https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=visualstudio

Wednesday
> recommend using async-await for fetch (this is the modern way)
> ...but if needed, fetch.then.then will also work (but is considered older technology)
> the future is 'observables' but 'promises' are perfectly good for now
> Using UI libraries MUI
> Build and config
> understanding dev-time: so good it renders twice
- real challenges and architect solution
  - manage a fund/multiple funds, all modelled to the same list of tickers
  - e.g. 30 tickers with different % weights
  - typical app updates model
  - Home page click a button. Choose edit, new, upload xlsx ...
    - system detect if exists and creates/updates
  - e.g. 3 ASP pages, convert to one jsx which reaches out to other jsx components
  - there are hundreds of ASP suites that provide utilities to the mgr team to use
  - load another page, grab models/weights/names etc from DB into page <<<<< 
  - do that with useEffect and fetch
  - NB React has no tools whatsoever for getting data
  - we are reliant on JS tools for getting data, which is 'fetch' and variations on that (I recommend react query https://ui.dev/why-react-query )
  - click around, make changes
  - goes to another page to confirm, changes
> clean-up useEffect (promises)
> conditional rendering
> building a production server project
> deploy to testing server then deploy to production
> brief TS overview... we NEVER run TS (it mst first be comverted to JS)
> routing????? see an example
> server-side-rendering
> templates: npm create react --template clever-thing-js (or ts)

what next...
- from ASP to React... but still has server-side pieces
- ssr, lazy loading, optimizing build chain
- integrating unit tests
- promises and observables
- routing??? if needed
- more details on RESTful data and using fecth (including resolving problems)
- what else
- more on MUI etc.
- React forms validation, dynamic etc.
- Reducers (handy for very large apps)

My shared repo: https://github.com/onionmccabbage/reactNovDec2025





end of coure feedback: https://forms.office.com/e/1qPVkZ8adU