import React, { useState } from "react";
import ImageUploader from "../Layout/ImageUploadBox";

const ProductUploadPage = () => {
  const [formData, setFormData] = useState({
    productName: '',
    parentCategory: '',
    subCategory: '',
    subSubCategory: '',
    material: '',
    color: 'Red',
    productType: '',
    topRated: '',
    bestSelling: '',
    upsell: '',
    actualPrice: '',
    salePrice: '',
    totalStocks: '',
    order: '',
    description: ''
  });

  const [productImages, setProductImages] = useState([]);
  const [backimages, setBackImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('Product Images:', productImages);
    console.log('Back Images:', backimages);
    console.log('Gallery Images:', galleryImages);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-4 text-sm text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>Product</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">Product Details</span>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            
            <div className="lg:col-span-1 space-y-6">
              <ImageUploader 
                label="Product Image" 
                onImagesChange={setProductImages}
                maxImages={1}
              />
              <ImageUploader 
                label="Back Images" 
                onImagesChange={setBackImages}
                maxImages={10}
              />
              <ImageUploader 
                label="Gallery Images" 
                onImagesChange={setGalleryImages}
                maxImages={10}
              />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Parent Category
                  </label>
                  <select
                    name="parentCategory"
                    value={formData.parentCategory}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Nothing Selected</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home & Garden</option>
                    <option value="sports">Sports & Outdoors</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Sub Category
                  </label>
                  <select
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    <option value="subcategory1">Sub Category 1</option>
                    <option value="subcategory2">Sub Category 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Sub Sub Category
                  </label>
                  <select
                    name="subSubCategory"
                    value={formData.subSubCategory}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Nothing Selected</option>
                    <option value="subsubcategory1">Sub Sub Category 1</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Material
                  </label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Nothing Selected</option>
                    <option value="cotton">Cotton</option>
                    <option value="polyester">Polyester</option>
                    <option value="metal">Metal</option>
                    <option value="plastic">Plastic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Color
                  </label>
                  <select
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Product Type
                  </label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Nothing Selected</option>
                    <option value="physical">Physical Product</option>
                    <option value="digital">Digital Product</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Is Best Selling
                  </label>
                  <select
                    name="bestSelling"
                    value={formData.bestSelling}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Nothing Selected</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Is Top Rated
                  </label>
                  <select
                    name="topRated"
                    value={formData.topRated}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Nothing Selected</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Is Upsell
                  </label>
                  <select
                    name="upsell"
                    value={formData.upsell}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Nothing Selected</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Actual Price
                  </label>
                  <input
                    type="number"
                    name="actualPrice"
                    value={formData.actualPrice}
                    onChange={handleInputChange}
                    placeholder="Actual Price"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sale Price
                  </label>
                  <input
                    type="number"
                    name="salePrice"
                    value={formData.salePrice}
                    onChange={handleInputChange}
                    placeholder="Sale Price"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total In Stocks
                  </label>
                  <input
                    type="number"
                    name="totalStocks"
                    value={formData.totalStocks}
                    onChange={handleInputChange}
                    placeholder="Total In Stocks"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleInputChange}
                    placeholder="Order"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <div className="border border-gray-300 rounded-md">
                <div className="border-b border-gray-300 px-3 py-2 bg-gray-50">
                  <div className="flex items-center space-x-2">
                    <button type="button" className="text-sm font-medium px-2 py-1 hover:bg-gray-200 rounded">B</button>
                    <button type="button" className="text-sm italic px-2 py-1 hover:bg-gray-200 rounded">I</button>
                    <button type="button" className="text-sm underline px-2 py-1 hover:bg-gray-200 rounded">U</button>
                    <span className="text-gray-300">|</span>
                    <button type="button" className="text-sm px-2 py-1 hover:bg-gray-200 rounded">≡</button>
                    <button type="button" className="text-sm px-2 py-1 hover:bg-gray-200 rounded">•</button>
                    <button type="button" className="text-sm px-2 py-1 hover:bg-gray-200 rounded">1.</button>
                    <span className="text-gray-300">|</span>
                    <button type="button" className="text-sm px-2 py-1 hover:bg-gray-200 rounded">🔗</button>
                  </div>
                </div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={8}
                  className="w-full px-3 py-2 border-0 resize-none focus:outline-none focus:ring-0"
                  placeholder="Enter product description..."
                />
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Create Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUploadPage;