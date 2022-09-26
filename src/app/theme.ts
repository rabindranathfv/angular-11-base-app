export interface Theme {
    name: string;
    properties: any;
  }

export const light: Theme = {
    name: 'light',
    properties: {
        '--background-default': '#ebeff5',
        '--navbar-color': 'white',
        '--card-color': 'white',
        '--item-active-color': '#105e6b',
        '--text-color': 'black',
        '--shadow-color': 'rgba(44, 51, 73, 0.24)',
        '--disabled-color': 'black',
        '--background-disabled': '#ebeff5'
    }
  };

export const dark: Theme = {
    name: 'dark',
    properties: {
        '--background-default': '#14192f',
        '--navbar-color': '#222b45',
        '--card-color': '#222b45',
        '--item-active-color': '#105e6b',
        '--text-color': 'white',
        '--shadow-color': '#1a1f33',
        '--disabled-color': 'black',
        '--background-disabled': '#393e55'
    }
  };
