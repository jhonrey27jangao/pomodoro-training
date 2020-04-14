import React, { useEffect } from "react";
import {
  DashBoardContainer,
  ItemContainer,
  ItemInfoContainer,
  ItemIconContainer,
  TableContainer,
} from "./styles";
import * as types from "./types";
import { NotCountry } from "./api/worldjson";

const CountryInfo: React.FC<types.CountryInfoProps> = ({ countries }) => {
  useEffect(() => {
    console.log(countries, "Countries");
  }, [countries]);

  return (
    <DashBoardContainer>
      <ItemContainer flexAs="2md">
        <ItemInfoContainer>
          <ItemIconContainer background="red">
            <h2>List of Affected Countries:</h2>
            <p className="sub-heading">
              List of countries affected by covid-19 virus
            </p>
          </ItemIconContainer>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Country Name</th>
                  <th>Cases</th>
                  <th>Deaths</th>
                  <th>Recoverd</th>
                  <th>Today Cases</th>
                  <th>Today Deaths</th>
                </tr>
              </thead>
              <tbody>
                {NotCountry.map((notcountry: any) => (
                  <>
                    {countries.map((item: any, index: any) => (
                      <>
                        {item.country !== notcountry.name ? (
                          <tr key={index}>
                            <td>{item.country}</td>
                            <td>{item.cases}</td>
                            <td>{item.deaths}</td>
                            <td>{item.recovered}</td>
                            <td>{item.todayCases}</td>
                            <td>{item.todayDeaths}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </ItemInfoContainer>
      </ItemContainer>
      <ItemContainer flexAs="2md">
        <ItemInfoContainer>
          <ItemIconContainer background="blue">
            <h2>News:</h2>
            <p className="sub-heading">Be updated to daily news in Covid</p>
            <div
              style={{
                marginTop: "10px",
                padding: "10px",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: "20px",
                  paddingLeft: "120px",
                }}
              >
                Dr. Milos will cure Covid 19?
              </h3>
              <img
                style={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  float: "left",
                  bottom: "20px",
                }}
                src="https://preview.redd.it/pubbsk4oked41.jpg?width=640&height=624&crop=smart&auto=webp&s=29efb5b83d349285355225bde3609052d3bc981a"
                alt=""
              />
              <p
                style={{
                  float: "right",
                  width: "70%",
                  textAlign: "left",
                  padding: "20px 10px 0 0",
                  color: "#fff",
                }}
              >
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </ItemIconContainer>
        </ItemInfoContainer>
      </ItemContainer>
    </DashBoardContainer>
  );
};

export default CountryInfo;
