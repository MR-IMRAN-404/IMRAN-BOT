module.exports.config = {
  name: "hot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR IMRAN",
  description: "HOT VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝐇𝐎𝐓 𝐕𝐈𝐃𝐄𝐎"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
    "https://drive.google.com/uc?id=1ZRRKR7-2lkhcxhWRG_1cDidIDrVWlYir",
    "https://drive.google.com/uc?id=1ZEfcYaWkjheGTvwhZHHZ4yWyP8H8bbN0",
    "https://drive.google.com/uc?id=1Zl73z3HFyX12RFiFu0CRR5_qB-oIMDnu",
    "https://drive.google.com/uc?id=1ZcB1vQUFxnsCuLQ83xlzZfrCEyovlng8",
    "https://drive.google.com/uc?id=1ZtBg4ctoDAxt1yPwR-jbnZC5wRVgTk4U",
    "https://drive.google.com/uc?id=1ZsWfqlleBT_mDFH2TTM5xhkXniMtaWfL",
    "https://drive.google.com/uc?id=1ZtiMhncq5n_GJOdijDI5KI_8IVC2ek58",
    "https://drive.google.com/uc?id=1ZYecR-xu2QAYzFjXjYM_2mhT1KSynuRO",
    "https://drive.google.com/uc?id=1Z-7TOpjSmbrRdxpf013bHoocc673G0BH",
    "https://drive.google.com/uc?id=1Z30E2oiKQlJfdK6ZL3TWtprs8Qr2mBHv",
    "https://drive.google.com/uc?id=1ZeFxnNprydJu81ymIi8611yC3h-yOAfd",
    "https://drive.google.com/uc?id=1Z89R4A7W7SSdkHIsY5wqGHxEaZ_YDTME",
    "https://drive.google.com/uc?id=1ZeFxnNprydJu81ymIi8611yC3h-yOAfd",
    "https://drive.google.com/uc?id=1Z89R4A7W7SSdkHIsY5wqGHxEaZ_YDTME",
    "https://drive.google.com/uc?id=1ZO5Dhk6ALw2wCtFkBbFQtWDGE57fx6RF",
    "https://drive.google.com/uc?id=1ZBICAsbUmePMHzETOnBvu0KOQt-oIT0P",
    "https://drive.google.com/uc?id=1Z-N9JQ4xLpLbqDjr1VwKgjBQw14m_Bcc",
    "https://drive.google.com/uc?id=1YBTzjLV2S-XqAifygJ31b_t05ooWUGiR",
    
"https://drive.google.com/uc?id=1a7XsNXizFTTlSD_gRQwK4bDA3HPam56W",
    "https://drive.google.com/uc?id=1aF6H24ILE6wIFGW3M3BGXg8l63ktP8B3",
    "https://drive.google.com/uc?id=1_ysGMbGZQexheta6tuSBhJQDeAMioXr_",
    "https://drive.google.com/uc?id=1bTwYfovA2YKCs_kskWyp2GHh7K9XHQN0",
    "https://drive.google.com/uc?id=1bPdkmq6lKm8BGwxkWaADHe0kutTtEujR",
    "https://drive.google.com/uc?id=1b_evUu8zmfiPs-CeaZp1DkkArB5zl5x-",
    "https://drive.google.com/uc?id=1brkBa03NdRCx6lfrjopbWJUCoJupCRYg",
    "https://drive.google.com/uc?id=1c6SCqToTZamfuiiz5LrckOxDYT9gnJGu",
    "https://drive.google.com/uc?id=1bv8GL0XDReocf1NfZBMCNoMAsBBwDE1i",
    "https://drive.google.com/uc?id=1c01XFZFNYRi_harhEbPvf-i25QIo9c0V",
    "https://drive.google.com/uc?id=1bs5sI8NDRVK_omefR59how1UjZ6TEu91",
    "https://drive.google.com/uc?id=1bcIoyM9T_wQlaXxar4nVjCXsKHavRmnb",
    "https://drive.google.com/uc?id=1boVaYpbxIH3RItPY6k0Ld2F98YasHVq9",
    "https://drive.google.com/uc?id=1c5YXcgK3kOx6bTfVjxNGGMdDYbGmVInC",
    "https://drive.google.com/uc?id=1c1OHfuq-YBOO-UwO5uybPqO7gOqTwInp",
    "https://drive.google.com/uc?id=1jsoQ4wuRdN6EP6jOE3C0L6trLZmoPI0L",
    "https://drive.google.com/uc?id=1jr4YzPNCTOj_lfdOSnauXfTPJkbuqS3f",
    "https://drive.google.com/uc?id=1tlon-avneE7lQF2rS13GOeiuLWIUEA7J",
    "https://drive.google.com/uc?id=1tqaCw0vfG2zJDijgsFF2UTlOB-EmI4SZ",
    "https://drive.google.com/uc?id=1ta1ujBjmcvxSuYVwQ3oEXIJsnPCW2VZO",
    "https://drive.google.com/uc?id=1svD1h3vEYbwxMeU5v4c2wQPBaU90fcEx",
    "https://drive.google.com/uc?id=1seUwXvoVFyCzOA5SykF9uxhlwuwLzPn0",
    "https://drive.google.com/uc?id=1t2oFQmOtw-6V_ahWzYo08v1g2oGnkhPL",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };