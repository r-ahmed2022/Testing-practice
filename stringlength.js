function stringLength(string) {
    const newstr = Array.from(string);
    let count = 0;
    for(let i=0;i<newstr.length;i++)
     count += 1;
       return count;
   }

module.exports = stringLength;

