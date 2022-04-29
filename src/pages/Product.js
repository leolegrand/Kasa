import React from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slider/Slider'
import { useFetch } from '../utils/hooks/useFetch'
import ProductInformations from '../components/ProductInformations/ProductInformations'
import Page404 from './Page404'

const Product = () => {
  const { data } = useFetch('data.json')
  const id = useParams('/produit=')

  // Data fetched are converted from object to array so we can access the map method
  const arrOfData = []
  Object.keys(data).forEach((key) => {
    arrOfData.push(data[key])
  })

  const currentProduct = arrOfData.find((d) => d.id === id.id)
  if (currentProduct) {
    return (
      <>
        <Slider props={currentProduct.pictures} />
        <ProductInformations props={currentProduct} />
      </>
    )
  } else {
    return <Page404 />
  }
}

export default Product
