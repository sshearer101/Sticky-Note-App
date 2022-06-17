import SearchBar from "./SearchBar";

export default function Header({ onSearch }){
    return(
        <div>
         <h1 className="title"> Sticky Notes</h1>
        <SearchBar onSearch={onSearch}/>
        </div>
    )
}