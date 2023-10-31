export const openDrawer = (el) => {
    console.log(el);
    const drawerCheckbox = document.getElementById(el);
    drawerCheckbox.checked = true;
}

export const closeDrawer = (el) => {
    const drawerCheckbox = document.getElementById(el);
    if (drawerCheckbox) {
        drawerCheckbox.checked = false;
    }
}
