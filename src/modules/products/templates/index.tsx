import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { Heading, Text } from "@medusajs/ui"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className=" m-10 rounded-md border-collapse border border-xx-default">
        <div className="border border-xx-default border-x-0 border-t-0">
          <ImageGallery images={product?.images || []} />  
        </div>
        <div className="grid grid-cols-1 small:grid-cols-3">
          {/* left wide column */}
          <div className="col-span-2">
            <div className="p-6"><Heading level="h2" className="text-3xl leading-10 text-ui-fg-base" data-testid="product-title">{product.title}</Heading></div>
            
            <div className="border border-xx-default border-x-0 border-b-0 font-normal font-sans txt-medium text-ui-fg-subtle">
              <div className="flex items-center ">
                <span className="p-6 text-blue-600 font-semibold mr-4 border border-xx-default border-y-0 border-l-0">"IMG" Business Automated</span>
                <div className="p-6 flex items-center ">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-1 text-sm">20 ratings</span>
                </div>
              </div>
              
              <div className="">{/* Description goes below */}
                <Text className="p-6  border border-xx-default border-x-0 border-b-0" data-testid="product-description">{product.description}</Text>              
                <div className="p-6">
                  <span >See our other products on E13 Marketplace</span>
                  <button className="p-3 bg-black text-white rounded ml-3">View products</button>
                </div>
              </div>

            </div>
          
          </div>

          {/* right slim column */}
          <div className="col-span-1 border border-xx-default border-y-0 border-r-0">

            {/* Airtable Base and Make blueprints  */}
            <div className="p-6">
            <div className="bg-gray-100 p-4 rounded mb-4 shadow-lg shadow-black cursor-pointer flex flex-row">
              <div><button className="badge-price">$40+</button></div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Airtable Base and Make blueprints</h3>
                <ul className="text-sm list-disc list-inside">
                  <li>Airtable base</li>
                  <li>Make scenario blueprint using Airtable with GPT4 / GPT3.5-turbo</li>
                  <li>Additional instructions</li>
                </ul>
              </div>
            </div>
            </div>

            {/* Airtable Base only */}
            <div className="p-6 pt-0">
              <div className="p-4 rounded mb-4 border border-black flex flex-row panel-shadow">
                <div><button className="badge-price">$40+</button></div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Airtable Base only</h3>
                </div>
              </div>
            </div>


            {/* fair price */}
            <div className="p-6 pt-0">
              <div className="flex border border-black p-1">
                <button className="badge-price w-10 ml-3">$</button>
                <input type="number" className="ml-3  focus:outline-none" placeholder="10+" />
              </div>
            </div>

            {/* Add to cart button */}
            <div className="p-6 pt-0 ">
              <button className="w-full bg-pink-500 text-white py-2 rounded mb-4 panel-shadow">Add to cart</button>
            </div>

            {/* 30-day money back */}
            <div className="flex items-center justify-center">
              <span className="underline cursor-pointer">30-day money back guarantee</span>            
            </div>

          </div>
        </div>
      </div>

      {/* <div
        className="content-container flex flex-col small:flex-row small:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div> */}
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
