import React, { Fragment, useEffect } from 'react';
import { fetchRestaurants } from '../apis/restaurants'; // apis

export const Restaurants = () => {

  useEffect(() => {
    fetchRestaurants()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <Fragment>
      レストラン一覧
    </Fragment>
  )
}
