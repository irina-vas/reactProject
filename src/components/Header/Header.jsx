import classes from './Header.module.css';
const Header = () => {
  return (
    <header className ={classes.header}>
        <div className={classes.header__logo}>
          <img src="https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png" />
        </div>
      </header>
  );
}

export default Header;