import React from 'react';
import DarkSwitch from '../darkmode/darkswitch';
import Cart from '../cart/cart';

function Header() {
  const [darkMode] = DarkSwitch();

  const styles = `
        .header-container,
        .header-container-dark {
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .left-green-blob {
            height: 100vh;
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
            user-select: none;
        }

        .right-empty-space {
            width: 40%;
            text-align: center;
            margin-left: 57%;
            margin-top: -650px;
            font-size: 35px;
            font-weight: 600;
        }

        .left-green-blob > h1,
        .left-green-blob-dark > h1,
        .right-empty-space > h1,
        .right-empty-space-dark > h1 {
            text-align: center;
            font-size: 100px;
            margin-top: 200px;
        }

        .left-green-blob > h1,
        .right-empty-space > h1 {
            color: #242424;
        }

        .left-green-blob-dark > h1 {
            color: #B39DDB;
            font-size: 100px;
            margin-top: 250px;
        }

        .left-green-blob > h1 span,
        .right-empty-space > h1 span {
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
            <div className='right-empty-space'>
                Carter is your assistant for <br/> managing your pantry. Plan meals, <br/> save/edit recipes, generate grocery <br/> lists,
                and find those items in stores <br/> 
                near you.
            </div>
            <Cart/>
        </div>
    </>
  );
}

export default Header;
