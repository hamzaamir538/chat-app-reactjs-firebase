import React, {useState, useContext} from "react";
import { BsArrowRight } from "react-icons/bs";
import dp from "./../img/background.jpg";
import avatar from "./../img/AvatarMaker.png";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { LoginContext } from "../context/LoginContext";

const Search = () => {

const [searchText, setSearchText] = useState('');
const [searchUser, setSearchUser] = useState();
const { profile } =
    useContext(LoginContext);

  const handleSearch = (e) => {
    e.preventDefault();

    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchText)
    );
    getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setSearchUser({ id: doc.id, data: doc.data() });
          console.log(doc.id, " => ", doc.data())
        });
      })
      .catch((err) => {
        console.log("Please search again...!");
        console.log(err);
      });
  }

  return (
    <div className="searchBox">
      <form action="" onSubmit={handleSearch}>
        <input type="search" name="" id="" placeholder="Search a Chat" value={searchText.trimStart()} onChange={(e)=>setSearchText(e.target.value)} />
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
