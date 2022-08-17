import React from 'react';
import Button from './Button';

const ButtonList = ({click }) => {
  const num = ["=", "AC", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const op = ["+", "-", "*", "/"]

  return (
    <main>
      <div className="button-list__left">
        {
          num.slice(0).reverse().map(item => {
            return <Button key={item} value={item} onClick={click} className="button__normal"/>
          })
        }
      </div>

      <div className="button-list__right">
        {
          op.map(item => {
            return <Button key={item} value={item} onClick={click} className="button__operators"/>
          })
        }
      </div>
    </main>
  )
}

export default ButtonList;