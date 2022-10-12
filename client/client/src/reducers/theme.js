import ActionTypes from "../constants/ActionTypes";

const initialState = {
    theme : 'bg-light',
    newUI : 'false'
};


export default (state = initialState, {type}) => {
    switch(type) {
        case ActionTypes.DARK_THEME : {
            localStorage.setItem('skiddlez-theme', 'bg-dark');
            localStorage.setItem('newTheme', 'false');
            return {
                theme : 'bg-dark',
                newUI : 'false'
            }
        }
        case ActionTypes.LIGHT_THEME : {
            localStorage.setItem('skiddlez-theme', 'bg-light');
            localStorage.setItem('newTheme', 'false');
            return {
                theme : 'bg-light',
                newUI : 'false'
            }
        }
        case ActionTypes.NEW_DARK_THEME : {
            localStorage.setItem('skiddlez-theme', 'bg-dark');
            localStorage.setItem('newTheme', 'true');
            return {
                theme : 'bg-dark',
                newUI : 'false'
            }
        }
        case ActionTypes.NEW_LIGHT_THEME : {
            localStorage.setItem('skiddlez-theme', 'bg-light');
            localStorage.setItem('newTheme', 'true');
            return {
                theme : 'bg-light',
                newUI : 'true'
            }
        }
        case ActionTypes.LOAD_THEME : {
            const selectedTheme = localStorage.getItem('skiddlez-theme');
            if(selectedTheme) {
                return {
                    theme : selectedTheme,
                    newUI : 'true'
                }
            } 
            localStorage.setItem('skiddlez-theme', 'bg-light');
            localStorage.setItem('newTheme', 'false');
            return {
                theme : 'bg-light',
                newUI : 'false'
            }
        }
        default : 
        return state;
    }
}