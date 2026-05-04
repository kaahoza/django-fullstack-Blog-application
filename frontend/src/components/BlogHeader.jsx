import { useState } from "react"
import {Search, User} from "lucide-react"
import { Button } from "@radix-ui/themes";

const BlogHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState("")

    const navItems = [
        {name: "Stories", href: "#"},
        {name: "Reciepes", href: "#"},
        {name: "Chefs", href: "#"},
        {name: "About", href: "#"}, 
        {name: "Contact", href: "#"}
    ]
    function Input() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder="Search stories..."
      value={value} 
      onChange={handleChange} 
      className={
        "flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      }
    />
  );
}

  return (
   <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <h1 className="font-serif text-2xl  md:text-3xl font-bold text-foreground">
                    Ivory Eatery
                </h1>
                <span className="hidden md:block text-muted-foreground font-light">
                Stories
                </span>
            </div>
            {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
           <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search stories..."
                className="pl-10 w-64 bg-background border-border"
              />
              
            </div>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>

        </div>
    </div>
   </header>
  )
}



export default BlogHeader

