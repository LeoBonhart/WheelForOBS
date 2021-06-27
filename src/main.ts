import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export type TPedalsStyle = 'default' | 'forza4';

const pedalsStyle: Array<TPedalsStyle> = ['default', 'forza4'];

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].dataset.wheelType;
}

export function getShowPedals(): boolean {
  return document.getElementsByTagName('base')[0].dataset.pedalsShow === 'false' ? false : true;
}

export function getShowWheel(): boolean {
  return document.getElementsByTagName('base')[0].dataset.wheelShow === 'false' ? false : true;
}

export function getPedalsStyle(): TPedalsStyle {
  const ps = (document.getElementsByTagName('base')[0].dataset.pedalsStyle ?? 'default') as TPedalsStyle;
  return pedalsStyle.indexOf(ps) !== -1 ? ps : 'default';
}

const providers = [
  { provide: 'WHEEL_TYPE', useFactory: getBaseUrl, deps: [] },
  { provide: 'SHOW_WHEEL', useFactory: getShowWheel, deps: [] },
  { provide: 'SHOW_PEDALS', useFactory: getShowPedals, deps: [] },
  { provide: 'PEDALS_STYLE', useFactory: getPedalsStyle, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
