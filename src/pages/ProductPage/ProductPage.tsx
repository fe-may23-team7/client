/* eslint-disable max-len */
import React, { useState } from 'react';
import './ProductPage.scss';
import '../../components/ProductCard/ProductCard.scss';
import classNames from 'classnames';
import {
  AddToCartButton,
  FavouritesButton,
} from 'components/ProductCard/buttons';
import { ProductsSlider } from 'components/ProductsSlider';
import { ProductColors } from '../../components/ProductColors';
import { ProductCapacity } from '../../components/ProductCapacity';
import { BackButton } from '../../components/BackButton';
import { BreadCrumbs } from '../../components/BreadCrumbs';

const productForTesting = {
  id: '5',
  category_id: 1,
  productId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  discountPrice: 375,
  screen: "4.7' IPS",
  capacity_id: 1,
  color_id: 1,
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};
// add to avoid errors, should be delete when db is ready

const product = {
  id: 'apple-iphone-11-64gb-purple',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 64GB Purple',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '64GB',
  priceRegular: 932, // fullPrice
  priceDiscount: 880, // discountPrice
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'purple',
  images: [
    'img/phones/apple-iphone-11/purple/00.jpg',
    'img/phones/apple-iphone-11/purple/01.jpg',
    'img/phones/apple-iphone-11/purple/02.jpg',
    'img/phones/apple-iphone-11/purple/03.jpg',
    'img/phones/apple-iphone-11/purple/04.jpg',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

const productsArray = Array(9)
  .fill(productForTesting)
  .map((prod, index) => ({
    ...prod,
    id: (parseInt(prod.id, 10) + index).toString(),
    name: `${prod.name} (${index + 1})`,
  }));

const techSpecs = Object.entries(product).slice(-7);

const capitalizeText = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const ProductPage: React.FC = () => {
  const [mainPhoto, setmainPhoto] = useState<string>(product.images[0]);

  return (
    <>
      <BreadCrumbs />
      <div className="product-page">
        <div className="product-page__content">
          <BackButton />

          <h1 className="product-page__title">{product.name}</h1>

          <div className="product-page__top">
            <div className="product-page__photos photos">
              <div className="photos__sidebar">
                {product.images.map((image) => (
                  <button
                    type="button"
                    className={classNames('photos__sidebar--wrapper', {
                      'photos__sidebar--wrapper--active': image === mainPhoto,
                    })}
                    onClick={() => setmainPhoto(image)}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/${image}`}
                      alt="product"
                      className="photos__sidebar--item"
                    />
                  </button>
                ))}
              </div>

              <div className="photos__main">
                <img
                  src={`${process.env.PUBLIC_URL}/${mainPhoto}`}
                  alt={product.name}
                  className="photos__main-photo"
                />
              </div>
            </div>

            <div className="product-page__rightbar">
              <div className="product-page__select-container">
                <div className="product-page__colors colors">
                  <p className="product-page__subtitle">Available colors</p>

                  <ProductColors
                    colors={product.colorsAvailable}
                    currentColor={product.color}
                  />
                </div>
              </div>

              <div className="product-page__select-container">
                <div className="product-page__capacity capacity">
                  <p className="product-page__subtitle">Select capacity</p>
                  <ProductCapacity
                    capacities={product.capacityAvailable}
                    currentCapacity={product.capacity}
                  />
                </div>
              </div>

              <div className="product-page__price">
                <h2 className="product-page__price--sale">
                  {!product.priceDiscount
                    ? `$${product.priceRegular}`
                    : `$${product.priceDiscount}`}
                </h2>

                <p className="product-page__price--reg">
                  {`$${product.priceRegular}`}
                </p>
              </div>

              <div className="product-page__buttons">
                <AddToCartButton
                  product={productForTesting}
                  styles={[
                    'product-page__button',
                    'product-page__button--active',
                  ]}
                />

                <FavouritesButton
                  product={productForTesting}
                  styles={[
                    'product__favourites',
                    'product__favourites--active',
                    'product-page__favourites',
                  ]}
                />
              </div>

              <div className="product-page__description description">
                {techSpecs.slice(3).map((data) => (
                  <div key={data[0]} className="description__group">
                    <p className="description--names">
                      {data[0] === 'ram'
                        ? data[0].toUpperCase()
                        : capitalizeText(String(data[0]))}
                    </p>
                    <p className="description--data">{String(data[1])}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-page__id">
              <p className="product-page__subtitle">ID: 123456</p>
            </div>
          </div>

          <div className="product-page__info info">
            <div className="info__content">
              <div className="info__about">
                <h1 className="info__title">About</h1>

                {product.description.map((desc) => (
                  <>
                    <h3 className="info__about--heading" key={desc.title}>
                      {desc.title}
                    </h3>

                    <p className="info__about--description">{desc.text}</p>
                  </>
                ))}
              </div>
              <div className="info__techspecs">
                <h1 className="info__title">Tech specs</h1>
                {techSpecs.map((data) => (
                  <div key={data[0]} className="info__techspecs--content">
                    <p className="info__techspecs--title">
                      {data[0] === 'ram'
                        ? data[0].toUpperCase()
                        : capitalizeText(String(data[0]))}
                    </p>
                    <p className="info__techspecs--data">{String(data[1])}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-page__slider">
        {productsArray.length > 0 && (
          <ProductsSlider phones={productsArray} title="Hot prices" />
        )}
      </div>
    </>
  );
};
