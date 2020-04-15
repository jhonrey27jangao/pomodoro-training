import React, { useEffect, useState } from "react";
import {
  DashBoardContainer,
  ItemContainer,
  ItemInfoContainer,
  ItemIconContainer,
  TableContainer,
  ItemContent,
  CountryView,
} from "./styles";
import * as types from "./types";
import { NotCountry } from "./api/worldjson";
import Map from "./map";

const CountryInfo: React.FC<types.CountryInfoProps> = ({ countries }) => {
  const [sortedCountry, setSortedCountry] = useState(false);

  const [countryView, setCountryView] = useState({
    viewName: "",
    viewCases: 0,
    viewDeaths: 0,
    viewRecovered: 0,
    viewTodayCases: 0,
    viewTodayDeaths: 0,
  });

  const ascendingCountry = () => {
    countries.sort(
      (a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases)
    );
    setSortedCountry(true);
  };

  const descendingCountry = () => {
    countries.sort(
      (a: any, b: any) => parseFloat(a.cases) - parseFloat(b.cases)
    );
    setSortedCountry(false);
  };

  const sortCountry = (status: boolean) => {
    if (status === false) {
      ascendingCountry();
    } else {
      descendingCountry();
    }
  };
  useEffect(() => {
    console.log(countries, "Countries");
  }, [countries]);

  const renderOverView = () => {
    return (
      <>
        <CountryView>
          <h2>Overview</h2>
          <div className="sub-info">
            <h3>{countryView.viewName || "Please browse country"}</h3>
            <p className="cases">
              Total confirmed cases: <br />
              <span className="case-number">{countryView.viewCases}</span>
            </p>
            <p className="deaths">
              Total Deaths:
              <span className="value">+{countryView.viewDeaths}</span>
            </p>
            <p className="recoveries">
              Total Recoveries:
              <span className="value">+{countryView.viewRecovered}</span>
            </p>
            <p className="todays-cases">
              Today's cases:
              <span className="value">+{countryView.viewTodayCases}</span>
            </p>
            <p className="todays-deaths">
              Today's deaths:
              <span className="value">+{countryView.viewDeaths}</span>
            </p>
          </div>
          <button
            className="heal-button"
            onClick={() => alert("all affected here is now healed.")}
          >
            Heal covid here
          </button>
        </CountryView>
      </>
    );
  };
  return (
    <DashBoardContainer>
      <ItemContainer flexAs="30md" unPadd>
        <ItemContainer flexAs="full">
          <ItemInfoContainer>
            <ItemIconContainer background="red">
              <h2>Browse countries:</h2>
              <p className="sub-heading">
                List of countries affected by covid-19 virus
              </p>
            </ItemIconContainer>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Country Name</th>
                    <th>
                      Sort:
                      {sortedCountry ? (
                        <button
                          className="sort-button"
                          onClick={() => sortCountry(true)}
                        >
                          &#8593;
                        </button>
                      ) : (
                        <button
                          className="sort-button"
                          onClick={() => sortCountry(false)}
                        >
                          &#8595;
                        </button>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <input
                        type="text"
                        width={200}
                        placeholder="Filter countries"
                      />
                    </td>
                  </tr>
                  {NotCountry.map((notcountry: any) => (
                    <>
                      {countries.map((item: any, index: any) => (
                        <>
                          {item.country !== notcountry.name ? (
                            <tr key={index}>
                              <td colSpan={2}>
                                <button
                                  onClick={() =>
                                    setCountryView({
                                      viewName: item.country,
                                      viewCases: item.cases,
                                      viewDeaths: item.deaths,
                                      viewRecovered: item.recovered,
                                      viewTodayCases: item.todayCases,
                                      viewTodayDeaths: item.todayDeaths,
                                    })
                                  }
                                >
                                  <span className="country-name">
                                    {item.country}
                                  </span>
                                  <span className="country-cases">
                                    {item.cases}
                                  </span>
                                </button>
                              </td>
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
        <ItemContainer flexAs="full">
          <ItemInfoContainer>
            <ItemIconContainer background="blue">
              <h2>News:</h2>
              <p className="sub-heading">Be updated to daily news in Covid</p>
            </ItemIconContainer>
          </ItemInfoContainer>
        </ItemContainer>
      </ItemContainer>
      <ItemContainer flexAs="70md" unPadd>
        <ItemContainer flexAs="full">
          <ItemContent>
            <Map />
            {renderOverView()}
          </ItemContent>
        </ItemContainer>
      </ItemContainer>
    </DashBoardContainer>
  );
};

export default CountryInfo;
