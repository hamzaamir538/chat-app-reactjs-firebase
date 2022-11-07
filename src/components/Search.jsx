import React from "react";
import { BsArrowRight } from "react-icons/bs";
import dp from "./../img/background.jpg";
import avatar from "./../img/AvatarMaker.png";

const Search = () => {

  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (
    <div className="searchBox">
      <form action="" onSubmit={handleSearch}>
        <input type="search" name="" id="" placeholder="Search a Chat" />
        <button>
          <BsArrowRight />
        </button>
      </form>

      <div className="searchedUserBox">
        <div className="searchedHeading">Contacts</div>

        <div className="searchedUser">
          <div className="searchedUserImg">
            <img src={dp} width="100%" alt="" />
          </div>
          <div className="searchedUserDetails">
            <div className="searchedUserName">Hamza Aamir</div>
            <div className="searchedUserEmail">hamza@gmail.com</div>
          </div>
        </div>

        <div className="searchedUser">
          <div className="searchedUserImg">
            <img src={avatar} width="100%" alt="" />
          </div>
          <div className="searchedUserDetails">
            <div className="searchedUserName">Hamza Aamir</div>
            <div className="searchedUserEmail">hamza@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="searchedUserBox">
        <div className="searchedHeading">More</div>

        <div className="searchedUser">
          <div className="searchedUserImg">
            <img src={dp} width="100%" alt="" />
          </div>
          <div className="searchedUserDetails">
            <div className="searchedUserName">Hamza Aamir</div>
            <div className="searchedUserEmail">hamza@gmail.com</div>
          </div>
        </div>

        <div className="searchedUser">
          <div className="searchedUserImg">
            <img src={avatar} width="100%" alt="" />
          </div>
          <div className="searchedUserDetails">
            <div className="searchedUserName">Hamza Aamir</div>
            <div className="searchedUserEmail">hamza@gmail.com</div>
          </div>
        </div>

        <div className="searchedUser">
          <div className="searchedUserImg">
            <img src={avatar} width="100%" alt="" />
          </div>
          <div className="searchedUserDetails">
            <div className="searchedUserName">Hamza Aamir</div>
            <div className="searchedUserEmail">hamza@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
