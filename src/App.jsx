import { Pagination } from "./Components/Pagination"
import { Search } from "./Components/Search"
import { Stories } from "./Components/Stories"

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