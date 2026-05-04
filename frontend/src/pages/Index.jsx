import Blog from "../Blog"
import BlogHeader from "../components/BlogHeader"
import BlogHero from "../components/BlogHero"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <BlogHero />
        <Blog />
      </main>
    </div>
  )
}

export default Index