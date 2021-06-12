  async function btnActive() {
  let urlIP = 'https://api.ipify.org/?format=json';
  let responseIP = await fetch(urlIP);
  let commitsIP = await responseIP.json();
  let Ip_Api = 'http://ip-api.com/json/?fields=61439';                 
  let responseIp_Api = await fetch(Ip_Api);
  let commitsIp_Api = await responseIp_Api.json();
                  text1.textContent = "Страна: " + commitsIp_Api.country;
                  text2.textContent = "Регион: " + commitsIp_Api.regionName;
                  text3.textContent = "Город: " + commitsIp_Api.city;
                  text4.textContent = "Часовой пояс: " + commitsIp_Api.timezone;


}