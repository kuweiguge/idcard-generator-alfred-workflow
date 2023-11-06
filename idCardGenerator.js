function run() {
  // 地区码
    let areaCodes = ["110000", "120000", "130000", "140000", "150000", "210000", "220000", "230000", "310000", "320000", "330000", "340000", "350000", "360000", "370000", "410000", "420000", "430000", "440000", "450000", "460000", "500000", "510000", "520000", "530000", "540000", "610000", "620000", "630000", "640000", "650000", "710000", "810000", "820000"];
    let weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let validateCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    // 随机选择一个地区码
    let areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];

    // 随机生成一个在1900年到当前年份之间的出生日期
    let birthYear = Math.floor(Math.random() * (new Date().getFullYear() - 1900 + 1)) + 1900;
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    let birthDay = Math.floor(Math.random() * 28) + 1;

    // 随机生成一个顺序码
    let sequenceCode = String(Math.floor(Math.random() * 1000)).padStart(3, '0');

    // 生成前17位数字
    let idCard = areaCode + String(birthYear).padStart(4, '0') + String(birthMonth).padStart(2, '0') + String(birthDay).padStart(2, '0') + sequenceCode;

    // 计算校验码
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += parseInt(idCard[i]) * weights[i];
    }
    let validateCode = validateCodes[sum % 11];

    // 添加校验码
    idCard += validateCode;
	  console.log(idCard)
    return idCard;
}
