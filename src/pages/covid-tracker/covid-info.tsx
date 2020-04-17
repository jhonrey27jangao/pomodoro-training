import React from "react";
import * as types from "./types";
import {
  DashBoardContainer,
  ItemContainer,
  ItemContent,
  ItemIconContainer,
} from "./styles";

const CovidInfo: React.FC<types.CovidInfoProps> = ({ info }) => {
  return (
    <DashBoardContainer>
      <ItemContainer flexAs="25md">
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
      <ItemContainer flexAs="25md">
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
      <ItemContainer flexAs="25md">
        <ItemContent>
          <div className="top">
            <ItemIconContainer background="green">
              <span>
                <img
                  src={require("../../assets/images/recovered.png")}
                  alt="Infected"
                />
              </span>
            </ItemIconContainer>
            <p>Recoveries:</p>
            <h3>{info.recovered}</h3>
          </div>
          <div className="bottom">
            <p>Tracked from: Github Live api </p>
          </div>
        </ItemContent>
      </ItemContainer>
      <ItemContainer flexAs="25md">
        <ItemContent>
          <div className="top">
            <ItemIconContainer background="dark">
              <span>
                <img
                  src={require("../../assets/images/github.png")}
                  alt="Infected"
                />
              </span>
            </ItemIconContainer>
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
