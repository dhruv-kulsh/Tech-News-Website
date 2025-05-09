import { Pagination } from "./Components/pagination"
import { Search } from "./Components/Search"
import { Stories } from "./Components/stories"

export const App = () => {
  return (
    <>
    <h2>My Tech News Post</h2>
      <Search/> 
      <br />
      <Pagination/>
      <br />
      <Stories/>
    </>
  )
}