import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
import JobPosting from '../src/pages/JobPosting';
import './App.css';
// import PageContainer from './components/PageContainer';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const client = new ApolloClient({
uri: 'http://localhost:3001/graphql',
cache: new InMemoryCache()
})


function App() {
return (
<ApolloProvider client={client}>
    <div className="App">
     <NavBar/>
      <Home/> 
      {/* <PageContainer/> */}
      {/* will delete home and navbar and use pagecontainer instead */}
    </div>
<div className="container mx-auto">
<JobPosting />
</div>
</ApolloProvider>
);
}
export default App;
