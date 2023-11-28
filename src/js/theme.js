const switchRef = document.querySelector("[data-switch=theme]");
const svgWelocmeModalRef = document.querySelector(".test-svg");
const headerSvgRef = document.querySelector(".header-svg");
const yearOfBirthSvg = document.querySelector(".year-of-birth-svg");
const guessNumberSvgRef = document.querySelector(".guess-number-svg");
const timeCalculatorSvgRef = document.querySelector(".time-calculator-svg");
const sliderLeftSvgRef = document.querySelector(".slider-left-svg");
const sliderRightSvgRef = document.querySelector(".slider-right-svg");
const footerSvgRef = document.querySelector(".footer-svg");

switchRef.addEventListener("input", () => {
  document.body.classList.toggle("dark-theme");
  if (switchRef.checked === true) {
    svgWelocmeModalRef.innerHTML = `<path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="white"/>`;

    headerSvgRef.innerHTML = `<path
    d="M11 12.4286L1 22.4286L11 32.4286"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M31 12.4286L41 22.4286L31 32.4286"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M24.5349 5.04265L15.9481 37.089C15.8314 37.5245 15.3838 37.783 14.9483 37.6663C14.5129 37.5496 14.2544 37.102 14.3711 36.6665L22.9579 4.62008C23.0746 4.1846 23.5222 3.92617 23.9577 4.04285C24.3932 4.15954 24.6516 4.60716 24.5349 5.04265Z"
    fill="white"
  />
  <path
    d="M22.9579 4.62008C23.0746 4.1846 23.5222 3.92617 23.9577 4.04285C24.3932 4.15954 24.6516 4.60716 24.5349 5.04265L23.4891 8.94578L21.9121 8.52321L22.9579 4.62008Z"
    fill="#D9D9D9"
  />
  <path
    d="M25.6948 7.02249L28.8488 7.86761"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M17.8096 4.9097L20.9637 5.75482"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M19.6457 1.21124L21.2833 4.0205"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M17.5865 8.89651L20.4093 7.28245"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M25.2756 8.58643L26.9133 11.3957"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M26.1497 5.32446L28.9725 3.7104"
    stroke="white"
    stroke-linecap="round"
  />`;

    yearOfBirthSvg.innerHTML = `<circle
  cx="6.52174"
  cy="6.52174"
  r="5.52174"
  stroke="black"
  stroke-width="2"
/>
<path
  d="M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.2929 15.7071ZM11.468 10.0538L10.7609 9.34665L9.34666 10.7609L10.0538 11.468L11.468 10.0538ZM15.7071 14.2929L11.468 10.0538L10.0538 11.468L14.2929 15.7071L15.7071 14.2929Z"
  fill="black"
/>`;

    guessNumberSvgRef.innerHTML = `<circle
cx="6.52174"
cy="6.52174"
r="5.52174"
stroke="black"
stroke-width="2"
/>
<path
d="M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.2929 15.7071ZM11.468 10.0538L10.7609 9.34665L9.34666 10.7609L10.0538 11.468L11.468 10.0538ZM15.7071 14.2929L11.468 10.0538L10.0538 11.468L14.2929 15.7071L15.7071 14.2929Z"
fill="black"
/>`;

    timeCalculatorSvgRef.innerHTML = `<circle
cx="6.52174"
cy="6.52174"
r="5.52174"
stroke="black"
stroke-width="2"
/>
<path
d="M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.2929 15.7071ZM11.468 10.0538L10.7609 9.34665L9.34666 10.7609L10.0538 11.468L11.468 10.0538ZM15.7071 14.2929L11.468 10.0538L10.0538 11.468L14.2929 15.7071L15.7071 14.2929Z"
fill="black"
/>`;

    sliderLeftSvgRef.innerHTML = `<path d="M51 1L1 51L51 101" stroke="white" />`;

    sliderRightSvgRef.innerHTML = `<path d="M1 1L51 51L1 101" stroke="white" />`;

    footerSvgRef.innerHTML = `<path
    d="M11 12.4286L1 22.4286L11 32.4286"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M31 12.4286L41 22.4286L31 32.4286"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M24.5349 5.04265L15.9481 37.089C15.8314 37.5245 15.3838 37.783 14.9483 37.6663C14.5129 37.5496 14.2544 37.102 14.3711 36.6665L22.9579 4.62008C23.0746 4.1846 23.5222 3.92617 23.9577 4.04285C24.3932 4.15954 24.6516 4.60716 24.5349 5.04265Z"
    fill="white"
  />
  <path
    d="M22.9579 4.62008C23.0746 4.1846 23.5222 3.92617 23.9577 4.04285C24.3932 4.15954 24.6516 4.60716 24.5349 5.04265L23.4891 8.94578L21.9121 8.52321L22.9579 4.62008Z"
    fill="#D9D9D9"
  />
  <path
    d="M25.6948 7.02249L28.8488 7.86761"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M17.8096 4.9097L20.9637 5.75482"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M19.6457 1.21124L21.2833 4.0205"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M17.5865 8.89651L20.4093 7.28245"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M25.2756 8.58643L26.9133 11.3957"
    stroke="white"
    stroke-linecap="round"
  />
  <path
    d="M26.1497 5.32446L28.9725 3.7104"
    stroke="white"
    stroke-linecap="round"
  />`;
  } else {
    svgWelocmeModalRef.innerHTML = `<path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="black"/>`;

    headerSvgRef.innerHTML = `<path
    d="M11 12.4286L1 22.4286L11 32.4286"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M31 12.4286L41 22.4286L31 32.4286"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M24.5349 5.04265L15.9481 37.089C15.8314 37.5245 15.3838 37.783 14.9483 37.6663C14.5129 37.5496 14.2544 37.102 14.3711 36.6665L22.9579 4.62008C23.0746 4.1846 23.5222 3.92617 23.9577 4.04285C24.3932 4.15954 24.6516 4.60716 24.5349 5.04265Z"
    fill="black"
  />
  <path
    d="M22.9579 4.62008C23.0746 4.1846 23.5222 3.92617 23.9577 4.04285C24.3932 4.15954 24.6516 4.60716 24.5349 5.04265L23.4891 8.94578L21.9121 8.52321L22.9579 4.62008Z"
    fill="#D9D9D9"
  />
  <path
    d="M25.6948 7.02249L28.8488 7.86761"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M17.8096 4.9097L20.9637 5.75482"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M19.6457 1.21124L21.2833 4.0205"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M17.5865 8.89651L20.4093 7.28245"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M25.2756 8.58643L26.9133 11.3957"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M26.1497 5.32446L28.9725 3.7104"
    stroke="black"
    stroke-linecap="round"
  />`;

    yearOfBirthSvg.innerHTML = `<circle
  cx="6.52174"
  cy="6.52174"
  r="5.52174"
  stroke="white"
  stroke-width="2"
/>
<path
  d="M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.2929 15.7071ZM11.468 10.0538L10.7609 9.34665L9.34666 10.7609L10.0538 11.468L11.468 10.0538ZM15.7071 14.2929L11.468 10.0538L10.0538 11.468L14.2929 15.7071L15.7071 14.2929Z"
  fill="white"
/>`;

    guessNumberSvgRef.innerHTML = `<circle
cx="6.52174"
cy="6.52174"
r="5.52174"
stroke="white"
stroke-width="2"
/>
<path
d="M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.2929 15.7071ZM11.468 10.0538L10.7609 9.34665L9.34666 10.7609L10.0538 11.468L11.468 10.0538ZM15.7071 14.2929L11.468 10.0538L10.0538 11.468L14.2929 15.7071L15.7071 14.2929Z"
fill="white"
/>`;

    timeCalculatorSvgRef.innerHTML = `<circle
cx="6.52174"
cy="6.52174"
r="5.52174"
stroke="white"
stroke-width="2"
/>
<path
d="M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.2929 15.7071ZM11.468 10.0538L10.7609 9.34665L9.34666 10.7609L10.0538 11.468L11.468 10.0538ZM15.7071 14.2929L11.468 10.0538L10.0538 11.468L14.2929 15.7071L15.7071 14.2929Z"
fill="white"
/>`;

    sliderLeftSvgRef.innerHTML = `<path d="M51 1L1 51L51 101" stroke="black" />`;

    sliderRightSvgRef.innerHTML = `<path d="M1 1L51 51L1 101" stroke="black" />`;

    footerSvgRef.innerHTML = `<path
    d="M11 12.4286L1 22.4286L11 32.4286"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M31 12.4286L41 22.4286L31 32.4286"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M24.5349 5.04265L15.9481 37.089C15.8314 37.5245 15.3838 37.783 14.9483 37.6663C14.5129 37.5496 14.2544 37.102 14.3711 36.6665L22.9579 4.62008C23.0746 4.1846 23.5222 3.92617 23.9577 4.04285C24.3932 4.15954 24.6516 4.60716 24.5349 5.04265Z"
    fill="black"
  />
  <path
    d="M22.9579 4.62008C23.0746 4.1846 23.5222 3.92617 23.9577 4.04285C24.3932 4.15954 24.6516 4.60716 24.5349 5.04265L23.4891 8.94578L21.9121 8.52321L22.9579 4.62008Z"
    fill="#D9D9D9"
  />
  <path
    d="M25.6948 7.02249L28.8488 7.86761"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M17.8096 4.9097L20.9637 5.75482"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M19.6457 1.21124L21.2833 4.0205"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M17.5865 8.89651L20.4093 7.28245"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M25.2756 8.58643L26.9133 11.3957"
    stroke="black"
    stroke-linecap="round"
  />
  <path
    d="M26.1497 5.32446L28.9725 3.7104"
    stroke="black"
    stroke-linecap="round"
  />`;
  }
});
