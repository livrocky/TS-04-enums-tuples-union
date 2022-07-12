/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */
// 4. sukurti enum appState kuris turi Loading, Error, Online. Parasyti funkcija kuri atspaustina htmle kortele "Loading...", "Ivyko klaida!!!" "Serbentaudas Bordiuras pasiruoses" priklausomai nuo state kuri gavo.

const destEl = document.getElementById('app') as HTMLDivElement | null;

// type StateType = 'Loading...' | 'Error' | 'Online';

enum AppState {
  Loading = 'Loading...',
  Error = 'Error!!!',
  Online = 'online',
}

// interface BlueInt {
//   state: AppState;
//   kitaState: StateType;
// }

function clearEl(dest: HTMLDivElement | null): void {
  if (!dest) return; // exit clause
  // eslint-disable-next-line no-param-reassign
  dest.innerHTML = '';
}

function runApp(state: AppState): void {
  clearEl(destEl);
  switch (state) {
    case AppState.Loading:
      console.log('Loading');
      outputState(AppState.Loading);
      break;
    case AppState.Error:
      console.log('errror ');
      outputState(AppState.Error);
      break;
    case AppState.Online:
      console.log('online ');
      outputState(AppState.Online);
      break;
    default:
      console.log('state not found: ');
  }
}

function outputState(state: AppState): void {
  const cardEl: HTMLDivElement = document.createElement('div');
  cardEl.className = state === AppState.Error ? 'card error' : 'card';
  const titleEl: HTMLHeadingElement = document.createElement('h2');
  titleEl.textContent = state === AppState.Online ? 'Serbentaudas Bordiuras pasiruoses' : state;
  cardEl.appendChild(titleEl);
  if (!destEl) return;
  destEl.append(cardEl);
}

//  run app

runApp(AppState.Loading);
setTimeout(() => {
  runApp(AppState.Online);
}, 5000);
