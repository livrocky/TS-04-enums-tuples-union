/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
// 4. sukurti enum appState kuris turi Loading, Error, Online. Parasyti funkcija kuri atspaustina htmle kortele "Loading...", "Ivyko klaida!!!" "Serbentaudas Bordiuras pasiruoses" priklausomai nuo state kuri gavo.

const destEl = document.getElementById('app') as HTMLDivElement | null;

enum AppState {
  Loading = 'Loading...',
  Error = 'error',
  Online = 'online',
}

function runApp(state: AppState): void {
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
      break;
    default:
      console.log('state not found: ');
  }
}
runApp(AppState.Loading);

function outputState(state: AppState): void {
  const cardEl: HTMLDivElement = document.createElement('div');
  cardEl.className = 'card';
  const titleEl: HTMLHeadingElement = document.createElement('h2');
  titleEl.textContent = state;
  cardEl.appendChild(titleEl);
  if (!destEl) return;
  destEl.append(cardEl);
}
