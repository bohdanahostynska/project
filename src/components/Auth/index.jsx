import React from 'react';
import scss from './style.module.scss';

function Auth() {
  return (
     <div className={scss.auth}>
      <header className={scss.auth__info}>
        <a href="#" className={scss.auth__link}><svg className={scss.auth__img} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 108.604 26.979"><defs><clipPath id="bordio_svg__a"><path data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 2240" fill="#fff" d="M0 0h108.604v26.979H0z"></path></clipPath></defs><g data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 885" clip-path="url(#bordio_svg__a)"><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 818" d="M36.361 10.119a5.708 5.708 0 012.264 2.257 6.76 6.76 0 01.82 3.354 6.832 6.832 0 01-.819 3.368 5.726 5.726 0 01-2.264 2.264 6.634 6.634 0 01-3.271.8 6.061 6.061 0 01-2.361-.445 4.38 4.38 0 01-1.792-1.257v1.707h-2.792v-17.5h2.931v6.32a4.939 4.939 0 011.771-1.243 5.891 5.891 0 012.245-.424 6.709 6.709 0 013.271.8m-.947 8.538a4.37 4.37 0 000-5.681 3.548 3.548 0 00-2.667-1.083 3.777 3.777 0 00-1.9.479 3.545 3.545 0 00-1.34 1.375 4.213 4.213 0 00-.493 2.062 4.139 4.139 0 00.493 2.062 3.454 3.454 0 001.34 1.375 3.713 3.713 0 001.9.479 3.512 3.512 0 002.667-1.069" fill="#fff"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 819" d="M44.819 21.341a5.911 5.911 0 01-2.382-2.292 6.459 6.459 0 01-.864-3.32 6.37 6.37 0 01.864-3.313 5.958 5.958 0 012.382-2.271 7.092 7.092 0 013.423-.826 7.219 7.219 0 013.454.82 6 6 0 012.382 2.271 6.816 6.816 0 010 6.632 6.055 6.055 0 01-2.382 2.292 7.22 7.22 0 01-3.454.82 7.006 7.006 0 01-3.423-.813m6.1-2.771a4.349 4.349 0 000-5.681 3.59 3.59 0 00-2.677-1.084 3.523 3.523 0 00-2.667 1.084 4.371 4.371 0 000 5.681 3.841 3.841 0 005.347 0" fill="#fff"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 820" d="M64.854 9.322v2.792a3.643 3.643 0 00-.68-.076 3.848 3.848 0 00-2.763 1.16 4 4 0 00-.966 2.875v6.083h-2.931V9.373h2.792v2.073a5.166 5.166 0 014.548-2.125" fill="#fff"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 821" d="M80.334 4.66v17.5h-2.82v-1.783a4.622 4.622 0 01-1.792 1.34 6.062 6.062 0 01-2.361.445 6.649 6.649 0 01-3.25-.8 5.725 5.725 0 01-2.264-2.264 6.833 6.833 0 01-.819-3.368 6.761 6.761 0 01.82-3.354 5.754 5.754 0 012.264-2.257 6.589 6.589 0 013.25-.8 5.854 5.854 0 012.271.424 4.714 4.714 0 011.764 1.264V4.66zm-4.715 14.514a3.5 3.5 0 001.34-1.375 4.214 4.214 0 00.493-2.062 4.14 4.14 0 00-.493-2.062 3.455 3.455 0 00-1.34-1.375 4.017 4.017 0 00-3.806 0 3.546 3.546 0 00-1.34 1.375 4.214 4.214 0 00-.493 2.062 4.14 4.14 0 00.493 2.062 3.454 3.454 0 001.34 1.375 3.713 3.713 0 001.9.479 3.851 3.851 0 001.9-.479" fill="#fff"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 822" d="M83.94 7.674a1.727 1.727 0 010-2.514 1.886 1.886 0 011.34-.5 1.959 1.959 0 011.34.479 1.57 1.57 0 01.535 1.209 1.765 1.765 0 01-.527 1.3 1.843 1.843 0 01-1.347.528 1.813 1.813 0 01-1.34-.5m-.146 1.625h2.931V22.16h-2.93z" fill="#fff"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 823" d="M92.809 21.341a5.914 5.914 0 01-2.383-2.292 6.464 6.464 0 01-.864-3.32 6.368 6.368 0 01.863-3.313 5.958 5.958 0 012.383-2.271 7.619 7.619 0 016.875 0 6 6 0 012.382 2.271 6.814 6.814 0 010 6.632 6.054 6.054 0 01-2.382 2.292 7.22 7.22 0 01-3.454.82 7.125 7.125 0 01-3.423-.82m6.1-2.771a4.349 4.349 0 000-5.681 3.59 3.59 0 00-2.677-1.083 3.523 3.523 0 00-2.667 1.083 4.371 4.371 0 000 5.68 3.841 3.841 0 005.347 0" fill="#fff"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 824" d="M105.306 21.604a1.96 1.96 0 112.743-2.8 1.96 1.96 0 01-2.743 2.8" fill="#fff"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 825" d="M2.729 0a6.951 6.951 0 002.8 10.459l11.277 5.451a6.951 6.951 0 00-2.8-10.459z" fill="#0062aa"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 826" d="M12.368 7.862l-3.014 4.444L0 26.09a9.871 9.871 0 0012.1-3.25l4.7-6.937A6.951 6.951 0 0014 5.445l-2.618-1.264a2.451 2.451 0 01.986 3.681" fill="#0094ff"></path></g></svg>
        <div className={scss.auth__right}><p className={scss.auth__text}>Already have an account?</p><a className={scss.auth__signin} href="/auth/signin">Log In</a></div>

</a>
      </header>
  
      <main className={scss.input__wrapper}>
        <div className={scss.input__cont}>
          <header className={scss.input__header}>
            <h1 className={scss.input__title}>Try Bordio for free</h1>
          <h2 className={scss.input__t}>No credit card required</h2>
          </header>
        <div className={scss.input__info}>
          <button className={scss.input__button}>
            <img src="https://app.bordio.com/static/media/google_logo.39c52b1b.png" className={scss.input__img} alt="logo"/>
          <span className={scss.input__text}>Sign Up with Google</span>
          </button>
          <button className={scss.input__button}><img src="https://app.bordio.com/static/media/facebook_logo.5f004163.png" className={scss.input__img} alt="logo"/><span className={scss.input__text}>Sign Up with Facebook</span>
          </button>
          </div>
          <div className={scss.input__swemail}>
            <span  className={scss.input__txt}>or Sign up with Email</span>
            </div>
          <form action="#" data-testid="start-form">
            <div className={scss.input__form}>
              <div className={scss.input__box}>
            <label className={scss.input__label}></label>
            <div className={scss.input__bottom}>
            <div width="100%" className={scss.input__content}>
              <input name="email" data-testid="email-field" placeholder="Email" className={scss.input__email} value=""/>
              </div>
              </div>
              </div>
              </div>
            <button className={scss.input__btn} disabled="" type="submit" data-testid="submit-button">Sign up for free</button></form>
 </div></main>
     </div>

  )
}

export default Auth