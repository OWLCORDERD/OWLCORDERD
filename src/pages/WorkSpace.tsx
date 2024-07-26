import Page404 from 'Components/404Page/Page404';
import Navbar from 'Components/Navigator/navbar';
import React from 'react';

function WorkSpace() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="container" id="container">
          <Page404 />
        </div>
      </main>
    </>
  );
}

export default WorkSpace;
