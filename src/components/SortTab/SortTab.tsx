// import { ChangeEvent, useState } from "react";
// import "./SortTab.scss"
// import RadioButton from "../RadioButton/RadioButton";

// type SortTabProps = {
//     handleChange : {sortType : string} => void: any;
//     selectedFilter : String[];
// }


// const SortTab = ( { handleChange, selectedFilter } : SortTabProps) => {
//     const [showSort, setShowSort] = useState<boolean>(false);

//     const handleClick = () => {
//         setShowSort(!showSort)
//     }

//     const sortProps = ["High to Low Rating", "Low to High Rating"]

//     return(
//         <div className="sort-tab">
//             <img src="https://www.svgrepo.com/show/21463/ascending-sort.svg" onClick={handleClick} className="sort-tab__image"/>
//             <div className="sort-tab__container">
//                 {showSort && (
//                     <div className="sort-options">
//                         <h4 className="sort-options__heading">High -{">"} Low Rating</h4>
                       
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default SortTab