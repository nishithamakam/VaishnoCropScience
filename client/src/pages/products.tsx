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
  const [openedCategory, setOpenedCategory] = useState(null); // string key
  const [openedProduct, setOpenedProduct] = useState(null); // product object

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
    <section className="section" style={{ marginTop: "28px" }}>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="product-card relative group flex flex-col items-center p-0"
              style={{ overflow: "hidden" }}
            >
              <div
                className="overflow-hidden rounded-xl shadow-xl w-full h-[210px] md:h-[240px] mb-3 relative"
                style={{ background: "#f9fafb" }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300"
                />
                {/* Overlay category title on image */}
                <div className="absolute bottom-3 left-3 text-white font-display font-bold text-2xl md:text-3xl shadow-lg px-3 py-1 rounded bg-black/50 pointer-events-none select-none">
                  {cat.title}
                </div>
              </div>
             
              <button  
                onClick={() => {
                  setOpenedCategory(cat.key);
                  setOpenedProduct(null);
                }}   
                 style={{
                  background: 'none',
                  border: 'none',
                  color: '#0a4483ff', // link blue
                  cursor: 'pointer',
                  textDecoration: 'none',
                  padding: 0,
                  fontSize: 'inherit',
                }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                Click here to view all products &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Render all products in a category page
  const renderCategoryProductsPage = () => (
    <main className="container mx-auto px-4 mt-8 mb-12 max-w-6xl">
      <h2 className="font-display text-3xl font-bold mb-6 text-primary-green text-center">
        {currentCategory.title} Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {currentCategory.products.map((product) => (
          <div
            key={product.id}
            className="product-card flex flex-col items-center group relative"
          >
            <div className="overflow-hidden rounded-lg w-full h-[170px] mb-3 transition-all duration-300 bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:brightness-110 group-hover:scale-105 transition-all"
              />
            </div>
            <h5 className="font-bold text-lg mb-1 text-primary-green">
              {product.name}
            </h5>
            <div className="text-muted text-sm mb-2">{product.shortDesc}</div>
            <button
              className="btn-custom px-5 py-2 mt-auto"
              onClick={() => setOpenedProduct(product)}
              type="button"
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </main>
  );

  // Render single product detail page
  const renderProductDetailPage = () => (
    <main className="container mx-auto px-4 mt-8 mb-12 max-w-3xl">
      <div className="relative rounded-lg overflow-hidden shadow-2xl p-0 flex flex-col bg-white">
        <button
          className="absolute right-4 top-3 text-2xl text-accent hover:text-accent-red z-30"
          onClick={() => setOpenedProduct(null)}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="w-full h-[190px] flex items-center bg-gray-100 relative">
          <img
            src={openedProduct.image}
            alt={openedProduct.name}
            className="w-full h-[190px] object-cover brightness-105"
          />
          <div className="absolute left-4 bottom-4 bg-accent-red/70 text-white rounded-lg px-3 py-1 text-md font-bold font-display shadow-lg">
            {openedProduct.name}
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h6 className="font-display font-semibold text-primary-green mb-2 text-xl">
              {openedProduct.name}
            </h6>
            <p className="mb-3 text-muted-foreground">{openedProduct.longDesc}</p>
          </div>
          <hr className="my-2" />
          <div>
            <div className="mb-1">
              <span className="font-bold text-sm">Recommended Crops:</span>{" "}
              <span className="text-sm">{openedProduct.crops}</span>
            </div>
            <div className="mb-1">
              <span className="font-bold text-sm">Dosage:</span>{" "}
              <span className="text-sm">{openedProduct.dosage}</span>
            </div>
            <div>
              <span className="font-bold text-sm">Target Pests:</span>{" "}
              <span className="text-sm">{openedProduct.targets}</span>
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
        className="w-full h-[220px] md:h-[320px] flex items-end justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url('${bannerImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <h1 className="relative z-10 text-white font-display font-bold text-3xl md:text-5xl mb-4">
          {bannerTitle}
        </h1>
      </div>

      {/* Breadcrumb */}
      <div
        className="w-full px-3 pt-3 pb-2 md:px-8 flex flex-wrap gap-2 text-sm text-muted"
        style={{ background: "#f3f4f7" }}
      >
        {breadcrumb.map((bc, idx) => (
          <span key={idx} className="flex items-center">
            {idx > 0 && <span className="mx-1 text-muted">/</span>}
            {bc.click ? (
              <button
                className="text-primary-green hover:underline"
                onClick={bc.click}
              >
                {bc.name}
              </button>
            ) : (
              <span className="font-semibold">{bc.name}</span>
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
