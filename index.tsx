import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

/* 
CHALLENGE
1. create a navbar in JSX:
  -Use the semantic `nav` element as the parent wrapper
  -Have an h1 element with the brand name of your "website"
  -Insert an unordered list for the other nav elements
    -Inside the `ul`, have three `li`s for "pricing", "About", and "Contact"
  -Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Navbar = () => (
  <nav>
    <h1>CHALLENGE</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

root.render(
  <StrictMode>
    {/* <App /> */}
    <Navbar />
  </StrictMode>
);
