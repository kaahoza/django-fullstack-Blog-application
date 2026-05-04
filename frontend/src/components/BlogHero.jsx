import { FaArrowDown } from "react-icons/fa";
import hero_image from "../assets/hero_image.png"
import { Button } from "@radix-ui/themes";
const BlogHero = () => {
  return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero_image})` }}
      >
      <div className="absolute inset-0 bg-gradient-hero/5  mix-blend-overlay " />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-xl lg:text-8xl font-bold mb-4 leading-tight">
          Culinary
          <span className="block text-warm-gold italic">Stories</span>
        </h1>
        
        <p className="text-xl  md:text-2xl mb-8 text-rich-brown max-w-2xl mx-auto leading-relaxed">
          Where every dish tells a story, every flavor speaks of tradition, 
          and every meal becomes a cherished memory.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-warm-gold hover:bg-warm-gold/90 text-rich-brown font-semibold px-8 py-3 text-lg border-0 rounded-md "
          >
            Explore Stories
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 text-lg"
          >
            Latest Recipes
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaArrowDown className="h-6 w-6 text-white/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-20 bg-warm-gold/30 hidden lg:block" />
      <div className="absolute bottom-1/4 right-8 w-2 h-20 bg-warm-gold/30 hidden lg:block" />
    </section>
  )
}

export default BlogHero