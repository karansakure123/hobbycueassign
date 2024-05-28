import React, { useRef, useEffect } from 'react';

const Dropdown = ({ id, title, icon, items }) => {
  const dropdownRef = useRef(null);
  const dropdownToggleRef = useRef(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;
    const dropdownToggle = dropdownToggleRef.current;

    const handleMouseEnter = () => {
      dropdown.classList.add('show');
    };

    const handleMouseLeave = () => {
      dropdown.classList.remove('show');
    };

    dropdownToggle.addEventListener('mouseenter', handleMouseEnter);
    dropdownToggle.addEventListener('mouseleave', handleMouseLeave);
    dropdown.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dropdownToggle.removeEventListener('mouseenter', handleMouseEnter);
      dropdownToggle.removeEventListener('mouseleave', handleMouseLeave);
      dropdown.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id={id}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ref={dropdownToggleRef}
      >
        <i className={`fas ${icon} purple-icon`} />
        {title}
      </a>
      <ul
        className="dropdown-menu"
        aria-labelledby={id}
        ref={dropdownRef}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#">
              {item.title}
            </a>
            {item.subItems && (
              <ul className="list-unstyled">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a className="dropdown-item" href="#">
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

const App = () => {
  const exploreItems = [
    { title: 'People - Community' },
    { title: 'Places - Venues' },
    { title: 'Programs - Events' },
    { title: 'Products - Store' },
    { title: 'Posts - Write-ups' },
  ];

  const hobbiesItems = [
    {
      title: <strong>Arts</strong>,
      subItems: ['Music', 'Dance', 'Literary', 'Theatre', 'Visual'],
    },
    {
      title: <strong>Play</strong>,
      subItems: ['Games', 'Sports'],
    },
    {
      title: <strong>Making things</strong>,
      subItems: ['Clothing', 'Cooking', 'Garden', 'Model', 'Utility'],
    },
  ];

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <Dropdown id="navbarDropdown1" title="Explore" icon="fa-compass" items={exploreItems} />
      <Dropdown id="navbarDropdown2" title="Hobbies" icon="fa-star" items={hobbiesItems} />
    </ul>
  );
};

export default App;