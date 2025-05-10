import { useGlobalContext } from "../context"

export const Search = () => {

    const {query, SearchPost} = useGlobalContext();

    return(
        <>
           <div>
            <h1>Get News on the Go!</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type="text" placeholder="Search Here" value={query} 
                    onChange={(e) => SearchPost(e.target.value)}/>
                </div>
            </form>
           </div>
        </>
    )
}