import styled from "styled-components";

export const NavbarWrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 4px;
  border-color: red;
  
  a {
    text-decoration: none;
    color: black;
  }
  .navbar-links {
    align-items: center;
    justify-items: flex-end;
  }
  .link {
    display: block;
    padding: 0.5rem;
    color: black;
  }
  .navbar-collapse {
    flex-grow: 0;
  }
  .nav-item {
    padding: 0 0.5rem;
    color: black;
    transition: color 0.15s ease-in-out;
  }
  .nav-item:hover {
    color: #18bc9c;
  }
  .img-brand {
    height: 3rem;
  }
`;