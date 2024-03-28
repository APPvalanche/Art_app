import About from "./About"
import Banner from "./Banner"
import Header from "./Header"
import Work from "./Work"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
     <Header />
     <About />
     <Banner />
     <Work />
    </div>
  )
}
