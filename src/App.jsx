import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import QuickViewModal from './components/QuickViewModal'

function App() {
  const [cart, setCart] = useState([
    // Start with a sample item so the user immediately sees how awesome the cart drawer is!
    {
      id: 1,
      name: 'English Willow Bat — Grade 1 Pro',
      category: 'Bats',
      price: 4499,
      originalPrice: 5999,
      icon: 'bat',
      badge: 'Grade 1 English Willow',
      quantity: 1,
    },
  ])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [toast, setToast] = useState(null)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => {
      setToast(null)
    }, 3000)
  }

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    showToast(`Added "${product.name}" to your Kit Bag!`)
  }

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id)
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    )
  }

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat)
  }

  return (
    <div className="min-h-screen bg-linen text-ink selection:bg-willow selection:text-pitch font-body flex flex-col">
      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-pitch text-linen border border-willow/40 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-semibold">{toast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-xs text-willow font-bold underline hover:text-willow-light ml-1"
          >
            View Bag →
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={handleSelectCategory}
        activeCategory={activeCategory}
      />

      {/* Hero Section */}
      <Hero
        onShopClick={() => {
          setActiveCategory('All')
        }}
      />

      {/* Curated Categories Section */}
      <Categories
        onSelectCategory={handleSelectCategory}
        activeCategory={activeCategory}
      />

      {/* Filtered Product Catalog */}
      <ProductGrid
        onAdd={handleAddToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Craftsmanship & Trust Standard */}
      <WhyUs />

      {/* Real Player Reviews & Testimonials */}
      <Testimonials />

      {/* Comprehensive E-Commerce Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Interactive Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveItem}
        onClear={handleClearCart}
      />

      {/* Quick View Technical Specs Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAdd={handleAddToCart}
      />
    </div>
  )
}

export default App
