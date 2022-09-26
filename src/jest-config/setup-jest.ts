import 'jest-preset-angular';
import './jestGlobalMocks';
import 'jest-canvas-mock';

Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
        getPropertyValue: (prop) => {
            return '';
        }
    })
});
