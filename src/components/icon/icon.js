const ICON_LIST = {
  'calendar': '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.00073 2.99992H4.33407V2.33325H9.66724V2.99992H11.0006V2.33325H12.3339V4.33325H1.66724V2.33325H3.00073V2.99992ZM1.66724 5.66658V12.3333H12.3339V5.66658H1.66724ZM4.33407 1H9.66724V0.333252H11.0006V1H12.334C13.0704 1 13.6673 1.59695 13.6673 2.33333V12.3333C13.6673 13.0697 13.0704 13.6667 12.334 13.6667H1.66732C0.930938 13.6667 0.333984 13.0697 0.333984 12.3333V2.33333C0.333984 1.59695 0.930938 1 1.66732 1H3.00073V0.333252H4.33407V1Z" fill="%%COLOR%%"/></svg>',
  'done': '<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.17232 6.79379L10.9661 0L12 1.03389L4.17232 8.86158L0 4.68926L1.03389 3.65537L4.17232 6.79379Z" fill="%%COLOR%%"/></svg>',
  'check': '<svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9395 0.439453L21.0608 2.56077L11.0001 12.6214L0.939453 2.56077L3.06077 0.439453L11.0001 8.37879L18.9395 0.439453Z" fill="%%COLOR%%"/></svg>',
  'user': '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M15 28.75C7.40608 28.75 1.25 22.5939 1.25 15C1.25 7.40608 7.40608 1.25 15 1.25C22.5939 1.25 28.75 7.40608 28.75 15C28.75 22.5939 22.5939 28.75 15 28.75ZM24.2494 21.4058C25.5108 19.5879 26.25 17.3803 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.78679 3.75 3.74999 8.7868 3.74999 15C3.74999 17.3803 4.48922 19.5879 5.75063 21.4058C7.15743 19.5476 10.4632 18.75 15 18.75C19.5367 18.75 22.8426 19.5476 24.2494 21.4058ZM22.4558 23.4247C22.09 22.1092 19.4617 21.25 15 21.25C10.5383 21.25 7.91 22.1092 7.54414 23.4247C9.52912 25.1827 12.1399 26.25 15 26.25C17.8601 26.25 20.4709 25.1827 22.4558 23.4247ZM15 7.5C11.9739 7.5 10 9.6947 10 12.5C10 16.7842 12.2011 18.75 15 18.75C17.7726 18.75 20 16.8495 20 12.75C20 9.90197 18.0178 7.5 15 7.5ZM12.5 12.5C12.5 15.3366 13.5228 16.25 15 16.25C16.4721 16.25 17.5 15.373 17.5 12.75C17.5 11.188 16.5196 10 15 10C13.4172 10 12.5 11.0198 12.5 12.5Z" fill="%%COLOR%%"/></g></svg>',
  'eye': '<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C14.7276 0 17.3357 1.43062 19.7663 3.78115C20.5955 4.58305 21.3457 5.43916 22.0061 6.29562C22.4046 6.81244 22.6875 7.21899 22.8425 7.4612L23.1871 8L22.8425 8.5388C22.6875 8.781 22.4046 9.18756 22.0061 9.70438C21.3457 10.5608 20.5955 11.417 19.7663 12.2189C17.3357 14.5694 14.7276 16 12 16C9.27247 16 6.66434 14.5694 4.23373 12.2189C3.40451 11.417 2.65433 10.5608 1.99393 9.70438C1.59543 9.18756 1.3125 8.781 1.15759 8.5388L0.812988 8L1.15759 7.4612C1.3125 7.21899 1.59543 6.81244 1.99393 6.29562C2.65433 5.43916 3.40451 4.58305 4.23373 3.78115C6.66434 1.43062 9.27247 0 12 0ZM20.4223 7.51688C19.8176 6.73272 19.1302 5.9482 18.376 5.21885C16.2825 3.19438 14.1051 2 12 2C9.89495 2 7.71751 3.19438 5.62406 5.21885C4.86986 5.9482 4.18241 6.73272 3.57777 7.51688C3.44718 7.68624 3.32651 7.84782 3.21619 8C3.32651 8.15218 3.44718 8.31376 3.57777 8.48312C4.18241 9.26728 4.86986 10.0518 5.62406 10.7811C7.71751 12.8056 9.89495 14 12 14C14.1051 14 16.2825 12.8056 18.376 10.7811C19.1302 10.0518 19.8176 9.26728 20.4223 8.48312C20.5529 8.31376 20.6735 8.15218 20.7839 8C20.6735 7.84782 20.5529 7.68624 20.4223 7.51688ZM8.00002 8C8.00002 10.2091 9.79088 12 12 12C14.2092 12 16 10.2091 16 8C16 5.79086 14.2092 4 12 4C9.79088 4 8.00002 5.79086 8.00002 8ZM14 8C14 9.10457 13.1046 10 12 10C10.8955 10 10 9.10457 10 8C10 6.89543 10.8955 6 12 6C13.1046 6 14 6.89543 14 8Z" fill="%%COLOR%%"/></svg>',
  'uncheck': '<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.70715 8.70703L0.29294 7.29282L7.00005 0.58571L13.7072 7.29282L12.2929 8.70703L7.00005 3.41414L1.70715 8.70703Z" fill="white"/></svg>',
};

const DATA_SVG_PREFIX = 'data:image/svg+xml;utf-8,';

function strReplace(str, search, replace) {
  if (str.indexOf(search)) {
    return str.replaceAll(search, replace);
  }

  return null;
}

export function getIcon(iconName, color) {
  const icon = ICON_LIST[iconName];
  const prepapredIcon = DATA_SVG_PREFIX.concat(icon);
  const concatedUrl = 'url('.concat('\'').concat(prepapredIcon).concat('\')');

  if (icon) {
    const iconSvg = strReplace(concatedUrl, '%%COLOR%%', color);

    return strReplace(iconSvg, '#', '%23');
  }

  return null;
}
