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
    props.flexAs === "4md" ? "25%" : props.flexAs === "3md" ? "30%" : "49%"};
  flex-basis: ${(props) =>
    props.flexAs === "4md" ? "25%" : props.flexAs === "3md" ? "30%" : "49%"}};
  padding: 0 15px;
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
  height: 250px;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
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
      color: ${(props) =>
        props.background === "blue"
          ? "#00acc1"
          : props.background === "green"
          ? "#43a047"
          : props.background === "red"
          ? "#e53935"
          : props.background === "dark"
          ? "#000"
          : "#fb8c00"};
      padding: 10px 8px 8px;
      font-size: 0.8125rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 600;
      line-height: 1.42857143;
      vertical-align: middle;
    }

    & tbody {
      tr {
        :hover {
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
    }
  }
`;
