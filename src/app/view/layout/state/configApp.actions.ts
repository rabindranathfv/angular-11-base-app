import { createAction, props } from '@ngrx/store';

export const showLoading = createAction('[CONFIGAPP Component] Show Loading');
export const hideLoading = createAction('[CONFIGAPP Component] Hide Loading');
export const loadTheme =  createAction(
    '[CONFIGAPP Component] Load Theme',
    props<{activeTheme: string, tableTheme: string }>()
);
