import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = (libraryStatus, setLibraryStatus) => {
   return (
      <nav className="nav">
         <h1>Melody</h1>
         <button onClick={() => setLibraryStatus(!libraryStatus)}>
            <FontAwesomeIcon icon={faMusic} />
            <>Library</>
         </button>
      </nav>
   );
};

export default Nav;
