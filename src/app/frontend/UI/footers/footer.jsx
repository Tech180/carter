import React from 'react';
import DarkSwitch from '../darkmode/darkswitch';

function Footer() {
  const [darkMode] = DarkSwitch();

  const date = new Date().getFullYear();

  return (
    <>
      <style jsx>{`
        .footer-container,
        .footer-container-dark {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .bottom-green-blob {
            position: relative;
            height: 5vw;
            margin-top: 10px;
            width: 100%;
            background-color: #9DC183;
            background-position: center;
            border-top-right-radius: 100px;
            border-top-left-radius: 100px;
        }

        .footer-copyright {
            position: absolute;
            bottom: 0;
            left: 0;
            margin-left: 10%;
            margin-bottom: 1.5%;
            font-size: 14px;
        }

        .footer-github-icon {
            position: absolute;
            right: 0;
            bottom: 0;
            margin-right: 10%;
            margin-bottom: 1.5%;
            font-size: 14px;
        }


      `}</style>

      <div className={darkMode ? 'footer-container-dark' : 'footer-container'}>
        <div className='bottom-green-blob'>
          <div className='footer-copyright'>
            carter <i className="fab fa-facebook-square" />{date}
          </div>
          <div className="footer-github-icon">
            temp
            <i className="fab fa-github">
            </i>
          </div>
        </div>
        <i className="fab fa-facebook-square" />
      </div>
    </>
  );
}

export default Footer;
