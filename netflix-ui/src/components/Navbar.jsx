import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { firebaseAuth } from "../utils/firebase-config";
import { FaPowerOff, FaSearch } from "react-icons/fa";

export default function Navbar(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  return (
    <Container>
      <nav className={`${props.isScrolled ? "scrolled" : ""} flex`}>
        <div className="left">
          <div className="brand">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="links">
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <span>{props.email}</span>

          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>

          <button onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }

  nav {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    background-color: #000;
    transition: 0.3s ease-in-out;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .brand img {
        height: 3rem;
      }

      .links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        padding: 0;
        margin: 0;

        li a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
      gap: 0.5rem;

      span {
        font-size: 0.85rem;
        color: white;
        word-break: break-word;
        text-align: center;
      }

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;

        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }

      .search {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        button {
          background-color: transparent;
          border: none;

          svg {
            color: white;
            font-size: 1.2rem;
          }
        }

        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;

          &:focus {
            outline: none;
          }
        }
      }

      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }

  /* Responsive styles for screens >= 768px */
  @media screen and (min-width: 768px) {
    nav {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .left {
        flex-direction: row;
        align-items: center;
        gap: 2rem;

        .links {
          flex-direction: row;
        }
      }

      .right {
        flex-direction: row;
        margin-top: 0;
      }
    }
  }
`;
