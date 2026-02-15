"use client";

import { useEffect, useState } from "react";

type Book = {
  skuId: string;
  title: string;
  listing: string;
  price?: number;
  mrp?: number;
  stock?: number;
  dimensions?: string;
  weight?: string;
  deliveryTime?: number;
  provider?: string;
  hsnCode?: string;
  amazonLink?: string;
  slug: string;
  images: string[];
};

const createEmptyForm = (): Book => ({
  skuId: "",
  title: "",
  listing: "Gita Press",
  price: undefined,
  mrp: undefined,
  stock: undefined,
  dimensions: "",
  weight: "",
  deliveryTime: 7,
  provider: "SELF",
  hsnCode: "4901",
  amazonLink: "",
  slug: "",
  images: [""],
});

export default function JsonGeneratorPage() {
  const [form, setForm] = useState<Book>(createEmptyForm());
  const [listings, setListings] = useState<Book[]>([]);

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("gita-json-data");
    if (saved) setListings(JSON.parse(saved));
  }, []);

  // Save automatically
  useEffect(() => {
    localStorage.setItem("gita-json-data", JSON.stringify(listings));
  }, [listings]);

  const updateField = (field: keyof Book, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateImage = (index: number, value: string) => {
    const imgs = [...form.images];
    imgs[index] = value;
    setForm((prev) => ({ ...prev, images: imgs }));
  };

  const addImageField = () => {
    setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const removeImageField = (index: number) => {
    if (form.images.length === 1) return;
    const imgs = form.images.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, images: imgs }));
  };

  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const addListing = () => {
    if (!form.title || !form.images[0]) {
      alert("Title and at least 1 image required");
      return;
    }

    const slug = form.slug || generateSlug(form.title);

    const newListing = { ...form, slug };

    setListings((prev) => [newListing, ...prev]);

    // clear form
    setForm(createEmptyForm());
  };

  const deleteListing = (index: number) => {
    setListings((prev) => prev.filter((_, i) => i !== index));
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(listings, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gitaPressListings.json";
    a.click();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 grid lg:grid-cols-2 gap-8">

      {/* LEFT — FORM */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Create Listing</h2>

        <input className="input" placeholder="SKU ID" value={form.skuId}
          onChange={(e) => updateField("skuId", e.target.value)} />

        <input className="input" placeholder="Title" value={form.title}
          onChange={(e) => updateField("title", e.target.value)} />

        <input className="input" placeholder="Slug (auto if empty)" value={form.slug}
          onChange={(e) => updateField("slug", e.target.value)} />

        <div className="grid grid-cols-2 gap-3">
          <input className="input" placeholder="Price" type="number"
            value={form.price ?? ""}
            onChange={(e) => updateField("price", Number(e.target.value))} />

          <input className="input" placeholder="MRP" type="number"
            value={form.mrp ?? ""}
            onChange={(e) => updateField("mrp", Number(e.target.value))} />
        </div>

        <input className="input" placeholder="Stock" type="number"
          value={form.stock ?? ""}
          onChange={(e) => updateField("stock", Number(e.target.value))} />

        <input className="input" placeholder="Dimensions"
          value={form.dimensions}
          onChange={(e) => updateField("dimensions", e.target.value)} />

        <input className="input" placeholder="Weight"
          value={form.weight}
          onChange={(e) => updateField("weight", e.target.value)} />

        <input className="input" placeholder="Amazon Link"
          value={form.amazonLink}
          onChange={(e) => updateField("amazonLink", e.target.value)} />

        {/* Images */}
        <div className="mt-4">
          <h3 className="font-medium mb-2">Images (links)</h3>

          {form.images.map((img, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                className="input flex-1"
                placeholder="Image URL"
                value={img}
                onChange={(e) => updateImage(i, e.target.value)}
              />
              <button onClick={() => removeImageField(i)} className="text-red-500">✕</button>
            </div>
          ))}

          <button onClick={addImageField} className="text-sm text-blue-600 mt-1">
            + Add image
          </button>
        </div>

        <button onClick={addListing}
          className="mt-6 bg-slate-900 text-white py-2 px-4 rounded-lg">
          Add Listing
        </button>

        <button onClick={downloadJSON}
          className="mt-3 border border-slate-300 py-2 px-4 rounded-lg ml-3">
          Download JSON
        </button>
      </div>

      {/* RIGHT — PREVIEW */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Listings Preview</h2>

        <div className="space-y-4">
          {listings.map((book, i) => (
            <div key={i} className="border p-4 rounded-lg flex justify-between">
              <div>
                <p className="font-medium">{book.title}</p>
                <p className="text-sm text-slate-500">₹{book.price}</p>
              </div>

              <button onClick={() => deleteListing(i)} className="text-red-500">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
