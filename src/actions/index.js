export const changeLocale = (locale) => (dispatch) => {
    dispatch({
        type: 'CHANGE_LOCALE',
        locale,
    });
};
