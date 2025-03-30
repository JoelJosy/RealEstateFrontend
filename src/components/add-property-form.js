"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddPropertyForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    type: "sale",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    location: "",
    yearBuilt: "",
    features: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property data:", formData);
    onSuccess();
  };

  const availableFeatures = [
    "Parking",
    "Pool",
    "Balcony",
    "Gym",
    "Fireplace",
    "Air Conditioning",
    "Furnished",
    "Pet Friendly",
    "Hardwood Floors",
    "Stainless Steel Appliances",
    "Washer/Dryer",
    "Garden",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="add-prop-form">
      <div className="space-y-2">
        <Label htmlFor="title">Property Title</Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g., Modern Downtown Apartment" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Describe your property..." rows={4} required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} placeholder="e.g., 450000" required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Input id="bedrooms" name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} placeholder="e.g., 2" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <Input id="bathrooms" name="bathrooms" type="number" step="0.5" value={formData.bathrooms} onChange={handleChange} placeholder="e.g., 2" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="squareFeet">Square Feet</Label>
          <Input id="squareFeet" name="squareFeet" type="number" value={formData.squareFeet} onChange={handleChange} placeholder="e.g., 1200" required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="e.g., 123 Main St, New York, NY" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="yearBuilt">Year Built</Label>
          <Input id="yearBuilt" name="yearBuilt" type="number" value={formData.yearBuilt} onChange={handleChange} placeholder="e.g., 2018" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Features</Label>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {availableFeatures.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={`feature-${feature}`}
                name="features" // Added name attribute here
                checked={formData.features.includes(feature)}
                onCheckedChange={() => handleFeatureToggle(feature)}
                disabled={false}
              />
              <label htmlFor={`feature-${feature}`} className="text-sm font-medium leading-none">
                {feature}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Property Images</Label>
        <div className="rounded-lg border border-dashed border-input p-6 text-center">
          <p className="text-sm text-muted-foreground">Drag and drop your images here, or click to browse</p>
          <Input type="file" multiple className="mt-2" accept="image/*" />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onSuccess}>Cancel</Button>
        <Button type="submit">Add Property</Button>
      </div>
    </form>
  );
}