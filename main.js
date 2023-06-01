const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

/* bands section */

const bands = [
  {
    name: 'Arctic Monkeys',
    bandPresentation: 'An indie rock sensation with a distinct sound and charismatic stage presence.',
    bandDescription: 'Prepare to be captivated by their energetic performances.',
    bandImage: './images/speaker_01.svg',
  },

  {
    name: 'The Black Keys',
    bandPresentation: 'A dynamic rock duo with bluesy influences and catchy riffs.',
    bandDescription: 'Their raw sound and energetic performances are not to be missed.',
    bandImage: './images/speaker_02.svg',
  },

  {
    name: 'Cage the Elephant',
    bandPresentation: 'Known for their high-energy performances and genre-blending sound.',
    bandDescription: 'Cage the Elephant brings a mix of indie rock, garage rock, and alternative influences.',
    bandImage: './images/speaker_03.svg',
  },

  {
    name: 'Vampire Weekend',
    bandPresentation: 'Vampire Weekend infuses indie rock with elements of pop, world music, and African rhythms.',
    bandDescription: 'The band\'s music is characterized by energetic guitar riffs.',
    bandImage: './images/speaker_04.svg',
  },

  {
    name: 'Two Door Cinema Club',
    bandPresentation: 'A lively indie rock band with catchy hooks and infectious energy.',
    bandDescription: 'The band\'s music is characterized by perfect for dancing and singing along.',
    bandImage: './images/speaker_05.svg',
  },

  {
    name: 'The Killers',
    bandPresentation: 'Hailing from Las Vegas, The Killers blend indie rock with electronic music influences.',
    bandDescription: 'They have achieved global success with songs like "Mr. Brightside" and "Somebody Told Me".',
    bandImage: './images/speaker_06.svg',
  },
];

const artistContainer = document.querySelector('.artists-list');

bands.forEach((element) => {
  /* Create elements */
  const artist = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const artistDescription = document.createElement('div');
  const bandName = document.createElement('h3');
  const presentation = document.createElement('p');
  const description = document.createElement('p');

  /* Giving classes */
  artist.classList.add('artist');
  imageContainer.classList.add('artist-img-container');
  // image.className.add('')
  artistDescription.classList.add('artist-description');
  bandName.classList.add('band-name');
  presentation.classList.add('band-presentation');
  description.classList.add('band-description');

  /* Assing values */
  image.src = element.bandImage;
  bandName.textContent = element.name;
  presentation.textContent = element.bandPresentation;
  description.textContent = element.bandDescription;

  /* Append childds to the artistDescription */
  imageContainer.appendChild(image);

  artistDescription.appendChild(bandName);
  artistDescription.appendChild(presentation);
  artistDescription.appendChild(description);

  artist.appendChild(imageContainer);
  artist.appendChild(artistDescription);

  artistContainer.appendChild(artist);
});