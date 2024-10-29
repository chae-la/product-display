import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import ProductList from '../../components/ProductList/ProductList'; 
import products from '../../data/products'; 
import "./Pagination.scss"

const itemsPerPage = 5;

const PaginatedProductList = () => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0,0)
  };


  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='pagination'>
      <ProductList products={currentProducts} />
      <Pagination
        count={Math.ceil(products.length / itemsPerPage)}
        page={page} 
        onChange={handleChange} 
        color="primary" 
        variant="outlined" 
        shape="rounded"
        size="small"
        className='pagination__style'
      />
    </div>
  );
};

export default PaginatedProductList;
