import { Pagination } from "./Components/Pagination"
import { Search } from "./Components/Search"
import { Stories } from "./Components/Stories"

export const App = () => {
  return (
    <>
      <Search/> 
      <br />
      <Pagination/>
      <br />
      <Stories/>
    </>
  )
}