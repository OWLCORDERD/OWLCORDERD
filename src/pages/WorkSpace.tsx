import Page404 from 'Components/404Page/Page404';
import MainNav from 'Components/Navigator/MainNav';
import ResponsiveNav from 'Components/Navigator/ResponsiveNav';
import ResponsiveMenu from 'Components/ResponsiveMenu/ResponsiveMenu';
import React from 'react';

function WorkSpace() {
  return (
    <>
      <header>
        <ResponsiveNav />
        <MainNav />
      </header>

      <ResponsiveMenu />

      <main>
        <div className="container" id="container">
          <Page404 />
        </div>
      </main>
    </>
  );
}

export default WorkSpace;
