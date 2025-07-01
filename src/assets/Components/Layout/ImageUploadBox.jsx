import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

const ImageUploader = ({ label, onImagesChange, maxImages = 5 }) => {
  const [images, setImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    imageFiles.forEach(file => {
      if (images.length < maxImages) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage = {
            id: Date.now() + Math.random(),
            file,
            preview: e.target.result,
            name: file.name
          };
          setImages(prev => {
            const updated = [...prev, newImage];
            onImagesChange?.(updated);
            return updated;
          });
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileInput = (e) => handleFiles(Array.from(e.target.files));

  const removeImage = (id) => {
    setImages(prev => {
      const updated = prev.filter(img => img.id !== id);
      onImagesChange?.(updated);
      return updated;
    });
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id={`upload-${label}`}
        />
        <label htmlFor={`upload-${label}`} className="cursor-pointer">
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg font-medium text-gray-600 mb-2">Click to upload or drag and drop</p>
          <p className="text-sm text-gray-500">PNG, JPG, up to {maxImages} images</p>
        </label>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.preview}
                alt={image.name}
                className="w-full h-24 object-cover rounded-lg border border-gray-200"
              />
              <button
                onClick={() => removeImage(image.id)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg truncate">
                {image.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
