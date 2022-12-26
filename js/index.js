/* Intro */
window.addEventListener('load', function() {
    var video = document.querySelector('video');
    video.addEventListener('timeupdate', function() {
      if (video.currentTime >= video.duration) {
        // After the video has finished playing, remove the intro element and show the homepage
        document.getElementById('intro').style.display = 'none';
        document.getElementById('homepage').style.display = 'block';
      }
    });
  });


async function getDigimon() {
  const response = await fetch('https://digimon-api.vercel.app/api/digimon');
  const data = await response.json();
  return data;
}

async function displayDigimon(i) {
  const digimons = await getDigimon();
  const cardContainer = document.getElementById('card-container');

  // Clear the card container
  cardContainer.innerHTML = '';

  // Create a new card element for the current Digimon
  const digimon = digimons[i];
  const card = document.createElement('div');
  card.classList.add('card');

  const name = document.createElement('h2');
  name.textContent = digimon.name;

  const level = document.createElement('p');
  level.textContent = `Level: ${digimon.level}`;

  //const image = document.createElement("img");
  //image.src = digimon.img;

  card.appendChild(name);
  card.appendChild(level);
  //card.appendChild(image);

  // Append the card to the card container
  cardContainer.appendChild(card);

  const canvas = document.getElementById('digivice');
  const context = canvas.getContext('2d');

  context.fillStyle = '#ffffff00';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Load the Digivice image
  const digiviceImage = new Image();
  digiviceImage.src = "https://lh3.googleusercontent.com/fife/AAbDypDWpkGC7zfVcoDpOGe_AQokAKpGbg38Jg-3xXHjMBslmJLMRdorUoQgutbm8gXLWQ3dUNEWET2ape0VDc2BTNqegfGURu9Gmew3h7oKEldmvCh4Z0ZinMNBMa12EC0RcwGBKrLwmtE3VnM0U_ptJgArNmqBp5qmXCiYhHZsRsZcn1WHD0AI7X1-s0EdBCwvWHxahp9_G0u_n1qSYHnJL07Q2XP587IvSfKaoS9N51qapzdtqPuROeYtdjbiwvPHK1tkHrH0lgBNkzrh_Ef7mgxWF8sTBl0xKTF3OKB-2S9wuujoNyYGGmnuFWf3ZO3N8W0uRl2qUA3NG2X0uJlRrNPjAa6QpVR6R1G-39XIrZB7PcZMJGt99LTano-Jg5DqpXaPyrOsI_YbgbAU1Qm26uyvEngmb3SUOuEuZyk0SbBLCkQvaAMfavcAU3789z-XcTMy0UZllJD-EAcLD4jfR-3svdiAmXj3Cs-GsdqUZBYuuiIbIu23vNy94bQUpdZWumtzN54VQkscHVXrfjTggjfoA6IOuJWgxHbUcnFvb1KAFgxNO-yvYhhXdMzkbFhTog1mIz6qr-aZCAve7EXLRxj6EEwOj9v1r8V3sNtJD4ZJqfrBWT3qGjCm3n5pQyZ2oqegzI15qX3rkNc_OA8QrL5wP6WD6GwM3wNkkFR1WjLI8Y40Rk58_M3L8GR7FwAPHO-A6hAYARmp9bpGR3I6ec7BlPddz93S6lpTmrWh7v2ts1NlBW4pET2RFDzxbnGTWFj52NkyhfKCaHSOaoaNB1rdv2YSCgApVn5otMmD2cUOERU1a9P4hzGo6ARlWqph2Br0arVn_RdESU11AIoi8udr7eZqLRCZgYBrq6p-N7s8k6ndNe3lRjUN5C7qsfDV9EnwATpg2gMszhXL4IrnUSAU1_Umq-ZNnpBDe8jlgIFv905pCMWbm8qF_3VVHSnG7ByS2ZBvV3yh_Uiytu7CnMhe4B1Jy9qJWoBV2nMZVZLeYwRSSo7Mq1pIEBOD5cNv59Y04O3FrEQc7wPlqrLSu2kn94v8wVh4Ms5uzfRCx48Wz4e2uuaqkF2gnMqNJ2EEZduxm-kwzu_O8J6JhYl_g0BuN-1SInBGnktSIGa0nJMYpbRP-34c9spNfUdLbS4rxwQonbTL3sIXBABRMhBTzYfKdmCcI-OU0qgA-EiAr3k6kkM7dm7TOaGWeLH-Sf_53oRYSjQWSdbYrv8w5PbFYHjhTTx6Ew0-h9yT8i4SuhGKZsWH7o02IY8dq6W-5mV0OR-e4vpbQhHWatsftr9iXHJLMWGbkSVSniTvqgdUnQ9T4yJDL332JQqCrMU-edom5VVPgOqvrHnX9RQ1pqkpi-WGHATj3ZH10Rfm_33y1Xv9s9QF7v3Gpvm0TYEAnNhlXhKW3mbEjXZvit7JkPS7MSJrYsO-VXseYqtUxDj9aj9WnbnzaN_pueuM1zNTuT5Mc82MGvnlwvTFxvBWEdA=w1366-h661";
  digiviceImage.onload = function () {
    context.drawImage(digiviceImage, 0, 0, 310, 290);
  };

  async function displayDigimon(digimons, i) {
    // Load the Digimon image
    const digimonImage = new Image();
    digimonImage.src = digimons[i].img;
    digimonImage.onload = function () {
      // Draw the Digimon image on top of the Digivice image
      context.drawImage(digimonImage, 110, 104, 90, 90);
    };
  }

  displayDigimon(digimons, i);
}

let i = 0;

const button = document.getElementById('button-right');
button.textContent = '➡️';

button.addEventListener('click', async function () {
  const digimons = await getDigimon();
  i++;
  if (i >= digimons.length) {
    i = 0;
  }
  displayDigimon(i);
});

const buttonBack = document.getElementById('button-left');
buttonBack.textContent = '⬅️';
buttonBack.addEventListener('click', async function () {
  const digimons = await getDigimon();
  i--;
  if (i < 0) {
    i = 0;
  }
  displayDigimon(i);
});

displayDigimon(i);