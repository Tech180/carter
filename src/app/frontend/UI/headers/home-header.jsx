import React from 'react';
import DarkSwitch from '../darkmode/darkswitch';

function Header() {
  const [darkMode] = DarkSwitch();

  const styles = `
        .header-container,
        .header-container-dark {
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
            background-size: 100% auto;
            user-select: none;
        }

        .header-container > h1,
        .header-container-dark > h1 {
            font-size: 100px;
            margin-top: 250px;
        }

        .header-container > h1 {
            color: #242424;
        }

        .header-container-dark > h1 {
            color: #B39DDB;
            font-size: 100px;
            margin-top: 250px;
        }

        .header-container > h1 span {
            position: relative;
            display: inline-block;
        }

        .left-green-blob {
            height: 101vh;
            top: 0;
            left: 0;
            width: 55%;
            background-color: #9DC183;
            background-size: 100% auto;
            background-position: center left;
            justify-content: flex-start;
            border-top-right-radius: 80px;
            border-bottom-right-radius: 80px;
            z-index: -1;
        }

        .left-green-blob > h1,
        .left-green-blob-dark > h1 {
            text-align: center;
            font-size: 100px;
            margin-top: 200px;
        }

        .left-green-blob > h1 {
            color: #242424;
        }

        .left-green-blob-dark > h1 {
            color: #B39DDB;
            font-size: 100px;
            margin-top: 250px;
        }

        .left-green-blob > h1 span {
            position: relative;
            display: inline-block;
        }
  `;

  return (
    <>
    <style jsx>{styles}</style>
        <div className={darkMode ? 'header-container-dark' : 'header-container'}>
            <div className='left-green-blob'>
                <h1>Carter</h1>
            </div>
        </div>
    </>
  );
}

export default Header;
