import { TopBar, Header, Featured, Footer } from "./import/index"


export const App = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <TopBar />
      <Header />
      <Featured />
      <div className="h-[900px]"></div>
      <Footer />
    </div>
  )
}
