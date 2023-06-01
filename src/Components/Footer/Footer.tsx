import React from 'react';
import '../../asset/styles/footer.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Hooks/index';
import { project, workspace } from '../reducer/counter';

function Footer() {
  const dispatch = useAppDispatch();

  const dynamicTxt = useAppSelector(state => state.counter.value);

  return (
    <div className="footer-container">
      {dynamicTxt === 'About' ? (
        <div className="Next-Chapter">
          <div className="NextChapter-Index">
            <p>Next - Chapter 2</p>
          </div>

          <div className="NextChapter-title">
            <Link to="/Project" onClick={e => dispatch(project())}>
              <h2>Project</h2>
            </Link>
            <p>Click to Next !</p>
          </div>

          <div className="NextChapter-info">
            <span>
              used my front-End skills
              <br />
              with publishing skills to made project site
            </span>
          </div>
        </div>
      ) : null}

      {dynamicTxt === 'Project' ? (
        <div className="Next-Chapter">
          <div className="NextChapter-Index">
            <p>Next - Chapter 3</p>
          </div>

          <div className="NextChapter-title">
            <Link to="/Project" onClick={e => dispatch(workspace())}>
              <h2>WorkSpace</h2>
            </Link>
            <p>Click to Next !</p>
          </div>

          <div className="NextChapter-info">
            <span>
              used my front-End skills
              <br />
              with publishing skills to made project site
            </span>
          </div>
        </div>
      ) : null}

      <div className="footer-copyright">
        <h2>© 2022. Owlcoderd All rights reserved.</h2>
      </div>
    </div>
  );
}

export default Footer;
