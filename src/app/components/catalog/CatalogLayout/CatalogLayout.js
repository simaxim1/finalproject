import React from 'react'
import { CatalogProductList } from '../CatalogProductList/CatalogProductList';
import { CatalogFilter } from '../CatalogFilter/CatalogFilter';

const CatalogLayout = ({title, filterCriterias, pricePath}) => {
  return (
    <div className='catalog'>
      <div className='catalog__head-line'>
        <h3>{title}</h3>
        <h4>СОРТУВАННЯ</h4>
      </div>
      <div className='catalog__body'>
        <CatalogFilter filterCriterias={filterCriterias} pricePath={pricePath}/>
        <CatalogProductList />
      </div>
        
    </div>
  )
}

export {CatalogLayout};
