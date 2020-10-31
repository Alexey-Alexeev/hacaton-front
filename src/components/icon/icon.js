const ICON_LIST = {
  'calendar': '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.00073 2.99992H4.33407V2.33325H9.66724V2.99992H11.0006V2.33325H12.3339V4.33325H1.66724V2.33325H3.00073V2.99992ZM1.66724 5.66658V12.3333H12.3339V5.66658H1.66724ZM4.33407 1H9.66724V0.333252H11.0006V1H12.334C13.0704 1 13.6673 1.59695 13.6673 2.33333V12.3333C13.6673 13.0697 13.0704 13.6667 12.334 13.6667H1.66732C0.930938 13.6667 0.333984 13.0697 0.333984 12.3333V2.33333C0.333984 1.59695 0.930938 1 1.66732 1H3.00073V0.333252H4.33407V1Z" fill="%%COLOR%%"/></svg>',
  'done': '<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.17232 6.79379L10.9661 0L12 1.03389L4.17232 8.86158L0 4.68926L1.03389 3.65537L4.17232 6.79379Z" fill="%%COLOR%%"/></svg>',
  'check': '<svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9395 0.439453L21.0608 2.56077L11.0001 12.6214L0.939453 2.56077L3.06077 0.439453L11.0001 8.37879L18.9395 0.439453Z" fill="%%COLOR%%"/></svg>',
  'user': '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M15 28.75C7.40608 28.75 1.25 22.5939 1.25 15C1.25 7.40608 7.40608 1.25 15 1.25C22.5939 1.25 28.75 7.40608 28.75 15C28.75 22.5939 22.5939 28.75 15 28.75ZM24.2494 21.4058C25.5108 19.5879 26.25 17.3803 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.78679 3.75 3.74999 8.7868 3.74999 15C3.74999 17.3803 4.48922 19.5879 5.75063 21.4058C7.15743 19.5476 10.4632 18.75 15 18.75C19.5367 18.75 22.8426 19.5476 24.2494 21.4058ZM22.4558 23.4247C22.09 22.1092 19.4617 21.25 15 21.25C10.5383 21.25 7.91 22.1092 7.54414 23.4247C9.52912 25.1827 12.1399 26.25 15 26.25C17.8601 26.25 20.4709 25.1827 22.4558 23.4247ZM15 7.5C11.9739 7.5 10 9.6947 10 12.5C10 16.7842 12.2011 18.75 15 18.75C17.7726 18.75 20 16.8495 20 12.75C20 9.90197 18.0178 7.5 15 7.5ZM12.5 12.5C12.5 15.3366 13.5228 16.25 15 16.25C16.4721 16.25 17.5 15.373 17.5 12.75C17.5 11.188 16.5196 10 15 10C13.4172 10 12.5 11.0198 12.5 12.5Z" fill="%%COLOR%%"/></g></svg>',
  'eye': '<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C14.7276 0 17.3357 1.43062 19.7663 3.78115C20.5955 4.58305 21.3457 5.43916 22.0061 6.29562C22.4046 6.81244 22.6875 7.21899 22.8425 7.4612L23.1871 8L22.8425 8.5388C22.6875 8.781 22.4046 9.18756 22.0061 9.70438C21.3457 10.5608 20.5955 11.417 19.7663 12.2189C17.3357 14.5694 14.7276 16 12 16C9.27247 16 6.66434 14.5694 4.23373 12.2189C3.40451 11.417 2.65433 10.5608 1.99393 9.70438C1.59543 9.18756 1.3125 8.781 1.15759 8.5388L0.812988 8L1.15759 7.4612C1.3125 7.21899 1.59543 6.81244 1.99393 6.29562C2.65433 5.43916 3.40451 4.58305 4.23373 3.78115C6.66434 1.43062 9.27247 0 12 0ZM20.4223 7.51688C19.8176 6.73272 19.1302 5.9482 18.376 5.21885C16.2825 3.19438 14.1051 2 12 2C9.89495 2 7.71751 3.19438 5.62406 5.21885C4.86986 5.9482 4.18241 6.73272 3.57777 7.51688C3.44718 7.68624 3.32651 7.84782 3.21619 8C3.32651 8.15218 3.44718 8.31376 3.57777 8.48312C4.18241 9.26728 4.86986 10.0518 5.62406 10.7811C7.71751 12.8056 9.89495 14 12 14C14.1051 14 16.2825 12.8056 18.376 10.7811C19.1302 10.0518 19.8176 9.26728 20.4223 8.48312C20.5529 8.31376 20.6735 8.15218 20.7839 8C20.6735 7.84782 20.5529 7.68624 20.4223 7.51688ZM8.00002 8C8.00002 10.2091 9.79088 12 12 12C14.2092 12 16 10.2091 16 8C16 5.79086 14.2092 4 12 4C9.79088 4 8.00002 5.79086 8.00002 8ZM14 8C14 9.10457 13.1046 10 12 10C10.8955 10 10 9.10457 10 8C10 6.89543 10.8955 6 12 6C13.1046 6 14 6.89543 14 8Z" fill="%%COLOR%%"/></svg>',
  'uncheck': '<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.70715 8.70703L0.29294 7.29282L7.00005 0.58571L13.7072 7.29282L12.2929 8.70703L7.00005 3.41414L1.70715 8.70703Z" fill="%%COLOR%%"/></svg>',
  'plus': '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" fill="%%COLOR%%"/><rect x="7" y="16" width="16" height="2" transform="rotate(-90 7 16)" fill="%%COLOR%%"/></svg>',
  'form': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="24 / various / form" opacity="0.5"><path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M20.1818 3H3.81818C2.81403 3 2 3.89543 2 5V7C2 8.10457 2.81403 9 3.81818 9H20.1818C21.186 9 22 8.10457 22 7V5C22 3.89543 21.186 3 20.1818 3ZM3.81818 11H20.1818C21.186 11 22 11.8954 22 13V15C22 16.1046 21.186 17 20.1818 17H3.81818C2.81403 17 2 16.1046 2 15V13C2 11.8954 2.81403 11 3.81818 11ZM4 13V15H20V13H4ZM4 5V7H20V5H4ZM14 19H2V21H14V19Z" fill="%%COLOR%%"/></g></svg>',
  'circle-arrow-left': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="24 / arrows / circle-arrow-left" opacity="0.5"><path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM17 11H10.4142L12.7071 8.70711L11.2929 7.29289L6.58579 12L11.2929 16.7071L12.7071 15.2929L10.4142 13H17V11Z" fill="%%COLOR%%"/></g></svg>',
  'admin-task': '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.622559 0.696045H7.17554V9.02695H0.622559V0.696045ZM15.3668 0.696045H8.81378V5.69459H15.3668V0.696045ZM5.53726 7.36078V2.36224H2.26077V7.36078H5.53726ZM13.7286 4.02842V2.36224H10.4521V4.02842H13.7286ZM13.7286 9.02694V14.0255H10.4521V9.02694H13.7286ZM5.53726 14.0255V12.3593H2.26077V14.0255H5.53726ZM15.3668 7.36075H8.81378V15.6917H15.3668V7.36075ZM0.622559 10.6931H7.17554V15.6917H0.622559V10.6931Z" fill="%%COLOR%%"/></mask><g mask="url(#mask0)"><rect x="-1.55566" y="-1.29858" width="18.6667" height="18.985" fill="#66788A"/></g></svg>',
  'admin-user': '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.53252 5.91052C6.96286 5.91052 8.12641 4.72713 8.12641 3.2724C8.12641 1.81766 6.96286 0.634277 5.53252 0.634277C4.10218 0.634277 2.93863 1.81766 2.93863 3.2724C2.93863 4.72713 4.10218 5.91052 5.53252 5.91052ZM0.344727 9.86772C0.344727 8.11148 3.79831 7.2296 5.53251 7.2296C7.26671 7.2296 10.7203 8.11148 10.7203 9.86772V11.1868H0.344727V9.86772ZM5.53253 8.7371C4.20594 8.7371 2.70148 9.24211 2.07895 9.67929H8.9861C8.36357 9.24211 6.85912 8.7371 5.53253 8.7371ZM6.64417 3.27241C6.64417 2.6468 6.14762 2.14178 5.5325 2.14178C4.91738 2.14178 4.42083 2.6468 4.42083 3.27241C4.42083 3.89802 4.91738 4.40303 5.5325 4.40303C6.14762 4.40303 6.64417 3.89802 6.64417 3.27241ZM10.75 7.27484C11.6097 7.90799 12.2025 8.75219 12.2025 9.86773V11.1868H15.167V9.86773C15.167 8.34516 12.5731 7.47835 10.75 7.27484ZM12.573 3.2724C12.573 4.72713 11.4095 5.91052 9.97915 5.91052C9.57895 5.91052 9.20839 5.81253 8.86748 5.64671C9.33438 4.97587 9.60859 4.15428 9.60859 3.2724C9.60859 2.39051 9.33438 1.56893 8.86748 0.898089C9.20839 0.732265 9.57895 0.634277 9.97915 0.634277C11.4095 0.634277 12.573 1.81766 12.573 3.2724Z" fill="white"/></mask><g mask="url(#mask0)"><rect x="-1.55566" y="-3.58203" width="18.6667" height="18.985" fill="%%COLOR%%"/></g></svg>',
  'trash': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="24 / basic / trash"><path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M9 1H15C16.1046 1 17 1.89543 17 3V4H20C21.1046 4 22 4.89543 22 6V8C22 9.10457 21.1046 10 20 10H19.9199L19 21C19 22.1046 18.1046 23 17 23H7C5.89543 23 5 22.1046 5.00345 21.083L4.07987 10H4C2.89543 10 2 9.10457 2 8V6C2 4.89543 2.89543 4 4 4H7V3C7 1.89543 7.89543 1 9 1ZM4 6H7H17H20V8H4V6ZM6.08649 10H17.9132L17.0035 20.917L17 21H7L6.08649 10ZM15 3V4H9V3H15Z" fill="%%COLOR%%"/></g></svg>',
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
