import styled from "styled-components";

export const StyledLayoutContainer = styled.div`
  background-color: #f2f5fa;
  background-image: url(https://pixelarity.com/items/demos/vortex/magenta/images/overlay.png),
    url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMTAwJyB2aWV3Qm94PScwIDAgMjAwIDEwMCcgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZSc+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSdyZzEnIGN4PScwJScgY3k9JzAlJyByPScxMDAlJyBmeD0nMCUnIGZ5PScwJSc+PHN0b3Agb2Zmc2V0PScwJScgc3R5bGU9J3N0b3AtY29sb3I6ICNhNDgwZmY7IHN0b3Atb3BhY2l0eTogMC41JyAvPjxzdG9wIG9mZnNldD0nMTAwJScgc3R5bGU9J3N0b3AtY29sb3I6ICNhNDgwZmY7IHN0b3Atb3BhY2l0eTowJyAvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSdyZzInIGN4PScxMDAlJyBjeT0nMCUnIHI9JzEwMCUnIGZ4PScxMDAlJyBmeT0nMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0eWxlPSdzdG9wLWNvbG9yOiAjZmY4ZjgzOyBzdG9wLW9wYWNpdHk6IDAuNScgLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0eWxlPSdzdG9wLWNvbG9yOiAjZmY4ZjgzOyBzdG9wLW9wYWNpdHk6MCcgLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cG9seWdvbiBwb2ludHM9JzAsMCAxMjUsMCAxMjUsMTAwIDAsMTAwJyBzdHlsZT0nZmlsbDogdXJsKCNyZzEpOycgLz48cG9seWdvbiBwb2ludHM9Jzc1LDAgMjAwLDAgMjAwLDEwMCA3NSwxMDAnIHN0eWxlPSdmaWxsOiB1cmwoI3JnMik7JyAvPjwvc3ZnPg==),
    url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…AyMDAsMCAyMDAsMTAwIDc1LDEwMCcgc3R5bGU9J2ZpbGw6IHVybCgjcmcyKTsnIC8+PC9zdmc+);
  background-size: auto, 100% 60rem, 100% 60rem;
  background-position: top left, top left, bottom left;
  background-repeat: repeat, no-repeat, no-repeat;
  font-family: "Source Sans Pro", Helvetica, sans-serif !important;
  margin: 0;
  padding: 20px 0 0;
  overflow: hidden;

  & h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  & div,
  section {
    box-sizing: border-box;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: left;
  }
`;

export const StyledLayoutContent = styled.div`
  width: 80rem;
  max-width: calc(100% - 7rem);
  margin: 0 auto;
  padding: 65px 0;
  overflow: hidden;
`;
