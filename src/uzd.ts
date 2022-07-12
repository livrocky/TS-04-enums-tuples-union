/* eslint-disable max-len */

// 1. sukurti baltijos saliu enuma be string reiksmiu.
//    1.1 iskonsolinti viena is saliu.

enum BalticCountries {
  Lithuania = 10,
  Latvia,
  Estonia,
}

// const oneCountry: BalticCountries = BalticCountries[0];
// console.log('oneCountry===', oneCountry);

console.log('BalticCountries.Latvia===', BalticCountries.Latvia);

// 2. sukurti atskira baltijos saliu enuma su sostine issaugota kaip string reiksme.
//    2.1 parasyti funkcija kuri priima argumentu priima 2prat aprasyta enuma ir atspausdina sakini priklausomai nuo to kuri salis gauta argumentu
//    pvz `aboutCountry('Vilnius') => 'Lietuvoje skanus saltibarsciai...'`

enum BalticCountriesCapital {
  Lithuania = 'Vilnius',
  Latvia = 'Riga',
  Estonia = 'Talin',
}

function aboutCountry(capital: BalticCountriesCapital): void {
  switch (capital) {
    case BalticCountriesCapital.Lithuania:
      console.log('Lietuvoje skanus saltibarsciai');
      break;
    case BalticCountriesCapital.Latvia:
      console.log('Saldainiu fabrikas');
      break;
    case BalticCountriesCapital.Estonia:
      console.log('Sestam rate suprato kad vaziuoja ziedu');
      break;
    default:
      console.log('kazkas kazkur');
  }
}
aboutCountry(BalticCountriesCapital.Latvia);
aboutCountry(BalticCountriesCapital.Estonia);

// 3. Sukurti enuma savaites dienoms angliskai, kur reiksme lygi konstantai: `monday = 'monday'`. Parasyti funkcija kuri argumentu priima sita enuma ir grazina:
//    3.1 monday => 'its a work day'
//    3.2 tuesday-friday => 'its a week day'
//    3.3 saturday => 'saturday a saturnday'
//    3.3 sunday => 'Its a last day'

// ********************

// 4. sukurti enum appState kuris turi Loading, Error, Online. Parasyti funkcija kuri atspaustina htmle kortele "Loading...", "Ivyko klaida!!!" "Serbentaudas bordiuras pasiruoses" priklausomai nuo state kuri gavo.
