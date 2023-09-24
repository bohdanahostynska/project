import React from 'react';
import scss from './style.module.scss'

function Register() {
  return (
     <div className='register container section'>
      <div className={scss.register__wrapper}>
        <div className="register__content">
            <div className="register__top"></div>
            <div className="register__main"></div>
        </div>
      </div>
     </div>

  )
}

export default Register