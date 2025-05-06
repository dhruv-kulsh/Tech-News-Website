import { Pagination } from "./Components/pagination"
import { Search } from "./Components/Search"
import { Stories } from "./Components/stories"
import { useContext } from "react"
import { AppContext } from "./context"
import { useGlobalContext } from "./context"


export const App = () => {
  // const data = useContext(AppContext)
  return (
    <>
    <div>The data is {data}</div>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  )
}