import styled from "styled-components";

export const DashBoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
`;

export const Item = styled.div`
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
  margin-bottom: 30px;
  flex-direction: column;

  & .mini-title {
    color: #999;
    margin: 0;
    font-size: 14px;
    margin-top: 0;
    padding-top: 10px;
    margin-bottom: 0;
  }

  & .main-title {
    color: #3c4858;
    margin-top: 0px;
    min-height: auto;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    margin-bottom: 3px;
    text-decoration: none;
  }

  & .item-detail-container {
    margin: 20px 15px 10px;
    display: flex;
    padding: 0;
    align-items: center;
    padding-top: 10px;
    border-radius: 0;
    justify-content: space-between;
    background-color: transparent;
    border-top: 1px solid #eee;
  }

  & a {
    color: #999;
    display: inline-flex;
    font-size: 12px;
    line-height: 22px;
  }

  & .icon-container {
    float: left;
    padding: 15px;
    margin-top: -20px;
    margin-right: 15px;
    border-radius: 3px;
    background-color: #999;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
      0 7px 10px -5px rgba(255, 152, 0, 0.4);

    & span img {
      width: 56px;
      height: 56px;
      overflow: unset;
      font-size: 36px;
      text-align: center;
      line-height: 56px;
      margin-bottom: 1px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
