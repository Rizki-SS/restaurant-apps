const DrawerInit = {
  init({menuBtn, drawer}) {
    menuBtn.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInit;
