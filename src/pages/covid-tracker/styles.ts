import styled from "styled-components";
import * as types from "./types";

export const DashBoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
`;

export const ItemContainer = styled.div<types.ItemProps>`
  flex-grow: 0;
  max-width: ${(props) =>
    props.flexAs === "25md"
      ? "25%"
      : props.flexAs === "30md"
      ? "30%"
      : props.flexAs === "60md"
      ? "60%"
      : props.flexAs === "40md"
      ? "40%"
      : props.flexAs === "70md"
      ? "70%"
      : props.flexAs === "50md"
      ? "50%"
      : "100%"};
  flex-basis: ${(props) =>
    props.flexAs === "25md"
      ? "25%"
      : props.flexAs === "30md"
      ? "30%"
      : props.flexAs === "60md"
      ? "60%"
      : props.flexAs === "40md"
      ? "40%"
      : props.flexAs === "70md"
      ? "70%"
      : props.flexAs === "50md"
      ? "50%"
      : "100%"};

  padding: ${(props) => (props.unPadd === true ? "0" : "0 15px")};

  & .map-container {
    position: absolute !important;
    right: 0;
  }
`;

export const ItemContent = styled.div`
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
  border: 0;
  display: flex;
  position: relative;
  font-size: 0.875rem;
  min-width: 0;
  word-wrap: break-word;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  margin-top: 30px;
  border-radius: 6px;
  margin: 30px 0;
  flex-direction: column;

  & .top {
    width: 90%;
    margin: 0 auto;
    text-align: right;
    box-shadow: none;
    background: transparent;

    & p {
      color: #999;
      margin: 0;
      font-size: 14px;
      margin-top: 0;
      padding-top: 10px;
      margin-bottom: 0;
    }

    a {
      position: relative;
      text-decoration: none;
      color: #333;
      line-height: 2;

  
      :before {
        position: absolute;
        left: -10px;
        width: 3px;
        height: 3px;
        content: '*';
      }
    }

    & h3 {
      color: #3c4858;
      min-height: auto;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 300;
      font-size: 25px;
      text-decoration: none;
      line-height: 1.5;
    }
  }

  & .bottom {
    border: 0;
    margin: 20px 15px 10px;
    display: flex;
    padding: 0;
    border-top: 1px solid #eee;
    align-items: center;
    padding-top: 10px;
    border-radius: 0;
    justify-content: space-between;
    background-color: transparent;
      & p {
        color: #999;
        display: inline-flex;
        font-size: 12px;
        line-height: 22px;
      }
    }
  }
`;

export const ItemIconContainer = styled.div<types.ItemProps>`
  float: left;
  padding: 15px;
  margin-top: -20px;
  margin-right: 15px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.background === "blue"
      ? "#00acc1"
      : props.background === "green"
      ? "#43a047"
      : props.background === "red"
      ? "#e53935"
      : props.background === "dark"
      ? "#000"
      : "#fb8c00"};

  & span img {
    width: 56px;
    height: 56px;
    overflow: unset;
    font-size: 36px;
    text-align: center;
    line-height: 56px;
    margin-bottom: 1px;
  }

  h2 {
    color: #fff;
    font-size: 20px;
    text-align: left;
    margin-bottom: 5px;
  }

  .sub-heading {
    width: 100%;
    padding-top: 5px;
    color: #eee;
    border-top: 1px solid #eee;
    font-size: 11px;
  }
`;

export const ItemInfoContainer = styled.div`
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
  border: 0;
  display: flex;
  position: relative;
  font-size: 0.875rem;
  min-width: 0;
  word-wrap: break-word;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  margin-top: 30px;
  border-radius: 6px;
  margin: 30px 0;
  flex-direction: column;
  padding: 0 10px 20px;
`;

export const TableContainer = styled.div<types.ItemProps>`
  overflow-y: scroll;
  height: 300px;
  scroll-behavior: smooth;

  input {
    width: 100%;
    border: 1px solid #ddd;
    cursor: text;
    box-sizing: border-box;
    text-transform: lowercase;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #eee;
  }

  .sort-button-cases {
    width: 45px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 20px;
    background: none;
    font-weight: 900;
    font-size: 15px;
    color: #00acc1;
    cursor: pointer;
    margin-left: 2px;
    padding: 3px 0;
  }

  .sort-button-alpha {
    width: 55px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 20px;
    background: none;
    font-weight: 900;
    font-size: 15px;
    margin-left: 2px;
    color: #00acc1;
    cursor: pointer;
    padding: 3px 5px;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #eee;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #eee;
  }
  & table {
    text-align: left;
    width: 100%;
    max-width: 100%;
    margin-bottom: 0;
    border-spacing: 0;
    border-collapse: collapse;
    background-color: transparent;

    & th {
      color: #333;
      padding: 10px 8px 0;
      font-size: 0.8125rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 600;
      line-height: 1.42857143;
      vertical-align: middle;
    }

    & tbody {
      tr {
        :hover {
          cursor: pointer;
          background: #eee;
        }
      }
      td {
        border-top: 1px solid #eee;
      }
    }
    & td {
      color: #000;
      padding: 8px;
      font-size: 0.8125rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 300;
      line-height: 1.42857143;
      vertical-align: middle;

      & .country-container {
        width: 100%;
        border: 2px solid #00809d;
        background: none;
        padding: 4px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0px 3px 10px #cecece;

        & .country-name {
          text-align: left;
          display: block;
          color: #00809d;
          font-weight: bold;
          font-size: 14px;
        }

        & .country-cases {
          display: inline-block;
          text-align: left;
          color: #333;
          font-weight: bold;
          background-color: #f5f5f5;
          border-radius: 2px;
          padding: 3px 4px 2px 4px;
        }

        & .country-deaths {
          display: inline-block;
          text-align: left;
          background-color: #de3700;
          border-radius: 2px;
          padding: 1px 4px 2px 4px;
          margin-left: 20px;
          font-weight: bold;
          color: #fff;
          padding-top: 3px;
        }

        & .country-recoveries {
          display: inline;
          text-align: left;
          color: #fff;
          background-color: #43a047;
          margin-left: 20px;
          padding: 3px 4px 2px 4px;
          font-weight: bold;
        }
      }
    }
  }
`;

export const CountryView = styled.div`
  .heal-button {
    position: absolute;
    bottom: -25px;
    right: 0px;
    width: 250px;
    height: 20px;
    border: none;
    border-radius: 20px;
    background: #00acc1;
    color: #fff;
    font-weight: bold;
  }

  position: absolute;
  top: 10px;
  right: 10px;
  width: 250px;
  height: 200px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  opacity: 0.9;

  h2 {
    font-size: 16px;
    margin-bottom: 5px;
    line-height: 22px;
    color: #333;
    font-weight: bold;
  }

  .sub-info {
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
    padding: 10px 5px 5px;

    h3 {
      color: #de3700;
      font-size: 16px;
      font-weight: bold;
    }

    .cases {
      .case-number {
        font-size: 32px;
        color: #de3700;
        font-weight: bold;
        line-height: 40px;
      }
    }

    p {
      font-size: 12px;
      color: #333;
      line-height: 1.3;
      font-weight: 600;

      .value {
        text-align: right;
        font-size: 11px;
        line-height: 15px;
        margin-left: 8px;
        background-color: #f5f5f5;
        border-radius: 2px;
        padding: 1px 4px 2px 4px;
        font-weight: 600;
      }
    }
  }
`;

export const InputContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  padding-bottom: 10px;

  & span {
    border-radius: 6px 0 0 6px;
    text-align: center;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 25px;
    color: #99a3ba;
    background: #eef4ff;
    border: 1px solid #cdd9ed;
    transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  }

  & input {
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #99a3ba;
    border: 1px solid #cdd9ed;
    background: #fff;
    transition: border 0.3s ease;
    position: relative;
    z-index: 1;
    flex: 1 1 auto;
    width: 1%;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0 6px 6px 0;

    & :placeholder {
      color: #cbd1dc;
    }
  }
`;

export const StyledErrorMessage = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  color: #ff0000;
  font-size: 13px;
  padding-left: 5px;
`;
