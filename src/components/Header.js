import SearchBar from "./SearchBar";

export default function Header({ onSearch }){
    return(
        <header>
         <h1 className="title"> Sticky Notes</h1>
        <SearchBar onSearch={onSearch}/>
        </header>
    )
}