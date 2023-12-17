import BestSeller from "@/components/BestSeller";
import Nav from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-blue-900  min-h-screen flex">
      <Nav/>
      <BestSeller/>
    </div>
    
  )
}
