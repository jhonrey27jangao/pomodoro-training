import React from "react";
import {
  DashBoardContainer,
  ItemContainer,
  ItemContent,
  ItemIconContainer,
} from "./styles";
import * as types from "./types";
const CovidInfo: React.FC<types.CovidInfoProps> = ({ info }) => {
  return (
    <DashBoardContainer>
      <ItemContainer>
        <ItemContent>
          <div className="top">
            <ItemIconContainer background="blue">
              <span>
                <img
                  src={require("../../assets/images/infected.png")}
                  alt="Infected"
                />
              </span>
            </ItemIconContainer>
            <p>Cases:</p>
            <h3>{info.cases}</h3>
          </div>
          <div className="bottom">
            <p>Tracked from: Github Live api </p>
          </div>
        </ItemContent>
      </ItemContainer>
      <ItemContainer>
        <ItemContent>
          <div className="top">
            <ItemIconContainer background="red">
              <span>
                <img
                  src={require("../../assets/images/death.png")}
                  alt="
                deats"
                />
              </span>
            </ItemIconContainer>
            <p>Deaths:</p>
            <h3>{info.deaths}</h3>
          </div>
          <div className="bottom">
            <p>Tracked from: Github Live api </p>
          </div>
        </ItemContent>
      </ItemContainer>
      <ItemContainer>
        <ItemContent>
          <div className="top">
            <p>Recoveries:</p>
            <h3>{info.recovered}</h3>
          </div>
          <div className="bottom">
            <p>Tracked from: Github Live api </p>
          </div>
        </ItemContent>
      </ItemContainer>

      <ItemContainer>
        <ItemContent>
          <div className="top">
            <p>Api Info:</p>
            <a href="https://github.com/javieraviles/covidAPI">
              Live Coronavirus API
            </a>
          </div>
          <div className="bottom">
            <p>Tracked from: Github Live api </p>
          </div>
        </ItemContent>
      </ItemContainer>
    </DashBoardContainer>
  );
};

export default CovidInfo;
