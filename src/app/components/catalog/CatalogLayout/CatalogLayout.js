import React from 'react'
import { CatalogProductList } from '../CatalogProductList/CatalogProductList';
import { CatalogFilter } from '../CatalogFilter/CatalogFilter';

const CatalogLayout = ({title, filterCriteria}) => {
  return (
    <div className='catalog'>
      <div className='catalog__head-line'>
        <h3>{title}</h3>
        <h4>СОРТУВАННЯ</h4>
      </div>
      <div className='catalog__body'>
        <CatalogFilter filterCriteria="brand"/>
        <CatalogProductList />
      </div>
        
    </div>
  )
}

export {CatalogLayout};