import { useGlobalContext } from "../context";

export const Stories = () => {

  const {hits, nbPages, isLoading} = useGlobalContext();

  if(!isLoading) return "Loading..."


  return <>
    
    {
        hits?.map((value, key) => {
          return (
            <div key={key}>
              { value.title}
            </div>
          )
        })
    }
    


  </>
}