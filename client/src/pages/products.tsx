import React, { useState } from "react";

const categories = [
  {
    key: "growth-promoters",
    title: "Growth Promoters",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&h=480",
    products: [
      {
        id: "mycin",
        name: "Mycin",
        shortDesc: "Accelerates plant growth and root development.",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&h=400",
        longDesc:
          "Mycin is a scientific growth promoter that accelerates plant development, improves root systems, and boosts overall crop performance and quality.",
        crops: "Cotton, chilly, vegetables, pulses, floriculture, horticultural crops",
        dosage: "Mix 1.0ml of super combi with 1g free powder in 1L water and spray.",
        targets:
          "Spodoptera, helicoverpa armigera, leafminer, diamondback moth, mites, scales, jassids, thrips, and all sucking and chewing insects.",
      },
      // Add more growth promoters here as needed...
    ],
  },
  {
    key: "biostimulants",
    title: "Biostimulants",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&h=480",
    products: [
      {
        id: "bio-plus",
        name: "Bio Plus",
        shortDesc: "Natural plant enhancer improving resistance.",
        image:
          "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=600&h=400",
        longDesc:
          "Bio Plus is derived from organic sources to stimulate plant metabolic processes, enhance nutrient uptake, and increase crop resilience.",
        crops: "Tomato, groundnut, wheat, sugarcane, paddy",
        dosage: "Dilute 2ml/liter and spray at vegetative stage.",
        targets: "Improves tolerance against stress; not a pesticide.",
      },
    ],
  },
  {
    key: "bio-fungicides",
    title: "Bio-fungicides",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&h=480",
    products: [
      {
        id: "fungocare",
        name: "FungoCare",
        shortDesc: "Protects crops from fungal diseases.",
        image:
          "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&h=400",
        longDesc:
          "FungoCare controls a wide spectrum of plant pathogenic fungi in the soil and on leaves, using beneficial micro-organisms for safer, residue-free crops.",
        crops: "Grapes, groundnut, beans, pulses",
        dosage: "Mix 3g/L and apply as foliar spray.",
        targets: "Powdery mildew, downy mildew, fusarium, phytophthora.",
      },
    ],
  },
  {
    key: "plant-protector",
    title: "Plant Protector",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&h=480",
    products: [
      {
        id: "safeguard",
        name: "SafeGuard",
        shortDesc: "Defends crops against pests naturally.",
        image:
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&h=400",
        longDesc:
          "SafeGuard coat shields plants against insect pests using botanical extracts, minimizing pest damage and residue.",
        crops: "Rice, wheat, maize, vegetables",
        dosage: "2ml/L for field crops; repeat as needed.",
        targets: "Aphids, whiteflies, jassids, mites.",
      },
    ],
  },
  {
    key: "paddy-special",
    title: "Paddy Special Products",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=480",
    products: [
      {
        id: "greengold",
        name: "GreenGold",
        shortDesc: "Boosts rice flowering and grain filling.",
        image:
          "https://images.unsplash.com/photo-1439122955806-6c6a7e51b64b?auto=format&fit=crop&w=600&h=400",
        longDesc:
          "GreenGold provides balanced nutrients specifically supporting paddy transformation, robust grain filling, and improved yield.",
        crops: "Paddy/rice (all varieties)",
        dosage: "4ml/L at panicle initiation and grain filling stages.",
        targets: "Prevents lodging and enhances tillering.",
      },
    ],
  },
  {
    key: "other",
    title: "Other",
    image:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&h=480",
    products: [
      {
        id: "rootplus",
        name: "RootPlus",
        shortDesc: "Improves drought tolerance and root mass.",
        image:
          "https://images.unsplash.com/photo-1449300079323-02e2051c3c8b?auto=format&fit=crop&w=600&h=400",
        longDesc:
          "RootPlus has potent bioactive compounds that enable stronger root formation and optimize nutrient absorption under adverse conditions.",
        crops: "All broadacre and horticulture crops",
        dosage: "3ml/L, water in well after application.",
        targets: "Improves root zone health; not a pesticide.",
      },
    ],
  },
];

const bannerImage =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&h=350";
const bannerTitle = "Our Agricultural Products";

export default function Products() {
  const [openedCategory, setOpenedCategory] = useState<string | null>(null); // string key
  const [openedProduct, setOpenedProduct] = useState<any | null>(null); // product object

  const currentCategory = openedCategory
    ? categories.find((cat) => cat.key === openedCategory)
    : null;

  // Breadcrumb path
  const breadcrumb = [
    {
      name: "Products",
      click: () => {
        setOpenedCategory(null);
        setOpenedProduct(null);
      },
    },
    ...(openedCategory
      ? [
          {
            name: currentCategory.title,
            click: () => {
              setOpenedProduct(null);
            },
          },
        ]
      : []),
    ...(openedProduct ? [{ name: openedProduct.name, click: null }] : []),
  ];

  // Render main product list grid (categories)
  const renderCategoryGrid = () => (
    <section className="section" style={{ paddingTop: "4rem", paddingBottom: "4rem", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.8))" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold font-display mb-4" style={{ color: "var(--primary-green)" }}>
          Product Categories
        </h2>
        <div className="text-center mb-12">
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--accent-red), var(--primary-green))',
            borderRadius: '2px',
            margin: '0 auto'
          }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              style={{ border: "1px solid rgba(76, 175, 80, 0.1)" }}
              onClick={() => {
                setOpenedCategory(cat.key);
                setOpenedProduct(null);
              }}
            >
              <div className="relative overflow-hidden h-[200px]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-display font-bold text-xl mb-1 drop-shadow-lg">
                    {cat.title}
                  </h3>
                  <div className="flex items-center text-white/90 text-xs font-medium">
                    <span>{cat.products.length} Products</span>
                    <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <button className="btn-custom text-center py-2 px-5 text-white font-normal rounded-full transition-all duration-300 group-hover:shadow-lg text-xs inline-block flex items-center gap-2 mx-auto" 
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
                    border: 'none'
                  }}>
                  Click Here
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Render all products in a category page
  const renderCategoryProductsPage = () => (
    <main className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl font-bold mb-4" style={{ color: "var(--primary-green)" }}>
          {currentCategory?.title} Products
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, var(--accent-red), var(--primary-green))',
          borderRadius: '2px',
          margin: '0 auto 1rem'
        }}></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our specialized {currentCategory?.title.toLowerCase()} designed to enhance your agricultural productivity
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCategory?.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
            style={{ border: "1px solid rgba(76, 175, 80, 0.1)" }}
          >
            <div className="relative overflow-hidden h-[180px] bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h5 className="font-bold text-xl mb-3 font-display" style={{ color: "var(--primary-green)" }}>
                {product.name}
              </h5>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {product.shortDesc}
              </p>
              <button
                className="btn-custom py-2 px-4 text-white font-normal rounded-full transition-all duration-300 hover:shadow-lg text-sm"
                onClick={() => setOpenedProduct(product)}
                type="button"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-red), #dc2626)',
                  border: 'none'
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );

  // Render single product detail page
  const renderProductDetailPage = () => (
    <main className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="bg-white rounded-lg">
        <button
          className="absolute right-6 top-6 text-gray-600 hover:text-red-600 z-30"
          onClick={() => setOpenedProduct(null)}
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div className="flex flex-col md:flex-row gap-8 p-8">
          <div className="flex flex-col items-center md:w-1/3">
            <img
              src={openedProduct?.image}
              alt={openedProduct?.name}
              className="w-64 h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-2xl text-center">
              {openedProduct?.name}
            </h3>
          </div>
          
          <div className="md:w-2/3">
            <div className="mb-6">
              <h4 className="font-semibold text-2xl mb-4" style={{ color: "var(--primary-green)" }}>
                Product Details
                <div className="w-20 h-1 bg-green-500 mt-2 rounded"></div>
              </h4>
              <p className="text-gray-700 leading-relaxed text-base">
                {openedProduct?.longDesc}
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Recommended Crops</h5>
                <p className="text-gray-700">{openedProduct?.crops}</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">Application & Dosage</h5>
                <p className="text-gray-700">{openedProduct?.dosage}</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">Target Pests & Benefits</h5>
                <p className="text-gray-700">{openedProduct?.targets}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <div data-testid="products-page">
      {/* Banner */}
      <div
        className="w-full h-[35vh] flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url('${bannerImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: '80px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-green-900/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-white font-display font-bold text-3xl md:text-4xl mb-3 text-shadow-lg">
            {bannerTitle}
          </h1>
          <p className="text-white/90 text-base md:text-lg font-normal max-w-2xl mx-auto px-4">
            Discover our comprehensive range of organic agricultural solutions designed to enhance crop productivity and sustainability
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div
        className="w-full px-6 py-4 md:px-12 flex flex-wrap gap-2 text-base border-b border-green-100"
        style={{ background: "linear-gradient(135deg, var(--light-green), rgba(255, 255, 255, 0.8))" }}
      >
        {breadcrumb.map((bc, idx) => (
          <span key={idx} className="flex items-center">
            {idx > 0 && <span className="mx-2 text-green-600 font-bold">›</span>}
            {bc.click ? (
              <button
                className="text-green-700 hover:text-green-900 font-semibold hover:underline transition-colors duration-200"
                onClick={bc.click}
              >
                {bc.name}
              </button>
            ) : (
              <span className="font-bold text-green-900">{bc.name}</span>
            )}
          </span>
        ))}
      </div>

      {/* Content based on state */}
      {!openedCategory && !openedProduct && renderCategoryGrid()}
      {openedCategory && !openedProduct && renderCategoryProductsPage()}
      {openedProduct && renderProductDetailPage()}
    </div>
  );
}
