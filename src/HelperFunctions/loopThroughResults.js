const loopThroughResults = (object) => {
  let array = [];
  for (const key in object) {
    array.push(`${key}: ${object[key]}`);
  }
  return array.slice(1, array.length);
};

export default loopThroughResults;
