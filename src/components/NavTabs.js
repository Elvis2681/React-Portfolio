import React from "react";

<div>
  <h1>hello world</h1>
</div>;

function NavItem({ active, page, handlePageChange }) {
  const href = `#${page.toLowerCase()}`;
  const className = active ? "nav-link active" : "nav-link";
  const onClick = () => handlePageChange(page);
  return (
    <li className="nav-item" key={page}>
      <a href={href} onClick={onClick} className={className}>
        {page}
      </a>
    </li>
  );
}

function NavTabs({ currentPage, handlePageChange }) {
  const pageNames = ["Home", "About", "Project", "Contact"];
  const navItems = pageNames.map((page) => (
    <NavItem
      key={page}
      active={page === currentPage}
      page={page}
      handlePageChange={handlePageChange}
    />
  ));
  return <ul className="nav nav-tabs">{navItems}</ul>;

  //add pictures and footer content
}

export default NavTabs;
