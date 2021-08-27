
import './App.css';
import Cameras from './components/Cameras';
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import RelatedItems from './components/RelatedItems';
import Pagination from 'react-js-pagination';
import MoreFilters from './components/MoreFilters';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(10);
  const [items, setitem] = useState([]);
  const resPerPage = 8;
  useEffect(() => {
    fetch('https://eps-gigya.herokuapp.com/rewardProducts')
      .then((res) => { return res.json() })
      .then((data) => { setitem(data) })
  }, [])

  const productsCount = items.length;

  const indexOfLastPost=currentPage*postPerPage;
  const indexOfFirstPost=indexOfLastPost-postPerPage;
  const currentPosts= items.slice(indexOfFirstPost,indexOfLastPost)

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App ">
      <Header />
      <Cameras /><br />
      <MoreFilters/>
      <Cards items={currentPosts} /><br />

      {postPerPage <= productsCount && (

        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={postPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText={'Next'}
            prevPageText={'prev'}
            firstPageText={'First'}
            lastPageText={'Last'}
            itemClass='page-item'
            linkClass='page-link'
          />


        </div>
      )}

      {/* <RelatedItems/> */}
      <Footer />

    </div>
  );
}

export default App;
