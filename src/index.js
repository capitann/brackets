module.exports = function check(str, bracketsConfig) {
  let pairs;
  for(let i = 0; i < bracketsConfig.length;){
    pairs = bracketsConfig[i].join('');
    if (str.includes(pairs)){
      str = str.replace(pairs, '');
      i = 0;
    }else{
      i++;
    }
  }
  return !str;
}
