// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const Page = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const { id, page } = useParams();

//   useEffect(() => {
//     setCurrentPage(parseInt(page));
//   }, [page]);

//   const handlePrevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < pages.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevChapter = () => {
//     // navigate to previous chapter
//   };

//   const handleNextChapter = () => {
//     // navigate to next chapter
//   };

//   return (
//     <div>
//       <img src={pages[currentPage].image} alt={`Page ${currentPage}`} />

//       {currentPage === 0 ? (
//         <div onClick={handlePrevChapter}>PREV</div>
//       ) : (
//         <div onClick={handlePrevPage}>PREV</div>
//       )}

//       {currentPage === pages.length - 1 ? (
//         <div onClick={handleNextChapter}>NEXT</div>
//       ) : (
//         <div onClick={handleNextPage}>NEXT</div>
//       )}
//     </div>
//   );
// };

// export default Page;
