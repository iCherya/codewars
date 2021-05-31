/**
 * 8 kyu - Holiday VI - Shark Pontoon
 * https://www.codewars.com/kata/57e921d8b36340f1fd000059
 */
const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    if (dolphin) sharkSpeed /= 2;

    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? 'Alive!' : 'Shark Bait!';
};
