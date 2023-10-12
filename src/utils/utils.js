export const searchValue = (array, property) => {
    const matchValue = array.find(item =>  item[property] && item[property].trim() !== '');
    return matchValue[property] ?? null;
}