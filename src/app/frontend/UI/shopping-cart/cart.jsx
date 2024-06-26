import React from 'react';
import DarkSwitch from '../darkmode/darkswitch';

function Cart () {
  const [darkMode] = DarkSwitch();

  const styles = `
        /* Shopping Cart */

        .shopping-cart {
            position: absolute;
            width: 576px;
            height: 424px;
            left: 111px;
            top: 328px;
        }
        
        /* Cart */
        .cart {
            position: absolute;
            width: 910px;
            height: 581px;
            left: -167px;
            top: -159px;
        }
        
        /* Basket */
        .shopping-basket {
            position: absolute;
            width: 361px;
            height: 145px;
            left: 257px;
            top: 308px;
            background: #242424;
            border-radius: 25px;
        }
        
        
        /* Cart Base */
        .shopping-cart-base {
            position: absolute;
            width: 398px;
            height: 181px;
            left: 219px;
            top: 308px;
            border: 25px solid #242424;
        }
        
        /* Wheels */
        
        .shopping-cart-wheels {
            position: absolute;
            width: 578px;
            height: 158px;
            left: 188px;
            top: 502px;
        }
        
        /* Wheel 1 */
        
        .shopping-cart-wheel1 {
            box-sizing: border-box;
            position: absolute;
            width: 73px;
            height: 73px;
            left: 167px;
            top: 0px;
            mix-blend-mode: normal;
            border: 18.7808px solid #242424;
        }
        
        /* Wheel 2 */
        
        .shopping-cart-wheel2 {
            box-sizing: border-box;
            position: absolute;
            width: 73px;
            height: 73px;
            left: 327px;
            top: 0px;
            mix-blend-mode: normal;
            border: 19px solid #242424;
        }
  `;

  return (
    <>
        <style jsx>{styles}</style>
        <div className="shopping-cart">
            <div className="cart">
                <div className="shopping-cart-wheels">
                    <div className="shopping-cart-wheel1"></div>
                    <div className="shopping-cart-wheel2"></div>
                </div>
                <div className="shopping-cart-base"></div>
                <div className="shopping-basket"></div>
            </div>
        </div>
    </>
  );
}

export default Cart;
