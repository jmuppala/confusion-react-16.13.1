import React, { Suspense } from 'react';
import NavBar from './components/NavBar';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import MenuList from './components/MenuComponent';
import DishDetail from './components/DishDetailComponent';
import Contact from './components/ContactComponent';
import Footer from './components/FooterComponent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from './components/LoadingComponent';
import { ErrorBoundary } from "react-error-boundary";
import Typography from '@material-ui/core/Typography';

function App() {

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container fixed>
      <ErrorBoundary
        fallbackRender={({error, componentStack, resetErrorBoundary}) => (
          <div role="alert">
            <Typography variant="h5" align='left' component="h5">
              Error
            </Typography>
            <Typography variant="body1" align='left' component="p">
              {error.message}
            </Typography>
          </div>
        )}
      >
      <Suspense fallback={<Loading message={'Loading'} />}>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/aboutus'>
            <About />
          </Route>
          <Route exact path='/menu'>
            <MenuList />
          </Route>
          <Route path='/menu/:dishId'>
            <DishDetail />
          </Route>
          <Route exact path='/contactus'>
            <Contact />
          </Route>
          <Redirect to='/home' />
        </Switch>
      </Suspense>
      </ErrorBoundary>
      </Container>
      <Footer />
    </>
  );
}

export default App;
