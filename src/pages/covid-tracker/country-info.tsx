import React, { useEffect, useState, useCallback } from "react";
import Map from "./map";
import * as types from "./types";
import {
  DashBoardContainer,
  ItemContainer,
  ItemInfoContainer,
  ItemIconContainer,
  TableContainer,
  ItemContent,
  CountryView,
} from "./styles";

const CountryInfo: React.FC<types.CountryInfoProps> = ({
  countries,
  worldInfo,
}) => {
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedCountry, setSortedCountry] = useState(false);
  const [alpha, setAlpha] = useState(false);
  const [sortDeathsOrRecovered, setsortDeathsOrRecovered] = useState(false);
  const [countryView, setCountryView] = useState({
    viewName: "",
    viewCases: 0,
    viewDeaths: 0,
    viewRecovered: 0,
    viewTodayCases: 0,
    viewTodayDeaths: 0,
  });

  const ascendingCountry = useCallback(() => {
    countryList.sort(
      (a: any, b: any) => parseFloat(b.cases) - parseFloat(a.cases)
    );
    setAlpha(false);
    setSortedCountry(true);
  }, [countryList]);

  const descendingCountry = useCallback(() => {
    countryList.sort(
      (a: any, b: any) => parseFloat(a.cases) - parseFloat(b.cases)
    );
    setSortedCountry(false);
    setAlpha(false);
  }, [countryList]);

  const sortCountry = useCallback(
    (status: boolean) => {
      if (status === false) {
        ascendingCountry();
      } else {
        descendingCountry();
      }
      setAlpha(false);
    },
    [ascendingCountry, descendingCountry]
  );

  const ascendingDeaths = useCallback(() => {
    countryList.sort(
      (a: any, b: any) => parseFloat(b.deaths) - parseFloat(a.deaths)
    );
    setsortDeathsOrRecovered(true);
    setAlpha(false);
  }, [countryList]);

  const ascendingRecoveries = useCallback(() => {
    countryList.sort(
      (a: any, b: any) => parseFloat(b.recovered) - parseFloat(a.recovered)
    );
    setsortDeathsOrRecovered(false);
    setAlpha(false);
  }, [countryList]);

  const sortAlpha = useCallback(() => {
    setAlpha(!alpha);
    countryList.sort(function (a: any, b: any) {
      if (a.country < b.country) {
        return -1;
      }
      return 0;
    });
  }, [countryList, alpha]);

  const handleSearch = useCallback((e) => {
    let getTerm = e.target.value;
    setSearchTerm(getTerm);
  }, []);

  useEffect(() => {
    const results = countries.filter((country: any) =>
      country.country.toLowerCase().includes(searchTerm)
    );
    setCountryList(results);
    setCountryView({
      viewName: "World",
      viewCases: worldInfo.cases,
      viewDeaths: worldInfo.deaths,
      viewTodayCases: 0,
      viewTodayDeaths: 0,
      viewRecovered: worldInfo.recovered,
    });
  }, [countries, searchTerm, worldInfo]);

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

  const displayCountry = useCallback(
    (item: any) => {
      setCountryView({
        viewName: item.country,
        viewCases: item.cases,
        viewDeaths: item.deaths,
        viewRecovered: item.recovered,
        viewTodayCases: item.todayCases,
        viewTodayDeaths: item.todayDeaths,
      });
    },
    [setCountryView]
  );

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
                  <tr key={1}>
                    <th key={3}>Country Name</th>
                    <th key={4}>
                      <button
                        className="sort-button-alpha"
                        onClick={() => sortAlpha()}
                        disabled={alpha}
                      >
                        &#8593; &#65;&#66;
                      </button>
                      {sortedCountry ? (
                        <button
                          className="sort-button-cases"
                          onClick={() => sortCountry(true)}
                        >
                          &#8593;C
                        </button>
                      ) : (
                        <button
                          className="sort-button-cases"
                          onClick={() => sortCountry(false)}
                        >
                          &#8595;C
                        </button>
                      )}
                      {sortDeathsOrRecovered === false ? (
                        <button
                          className="sort-button-cases"
                          onClick={() => ascendingDeaths()}
                        >
                          &#8593;D
                        </button>
                      ) : (
                        <button
                          className="sort-button-cases"
                          onClick={() => ascendingRecoveries()}
                        >
                          &#8593;R
                        </button>
                      )}
                    </th>
                  </tr>
                  <tr key={2}>
                    <td colSpan={2} key={5}>
                      <input
                        type="text"
                        width={200}
                        id="search"
                        placeholder="Search country .."
                        onChange={(e) => handleSearch(e)}
                      />
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {countryList.map((item: any, index: any) => {
                    if (
                      item.country === "" ||
                      item.country === "Total:" ||
                      item.country === "Asia" ||
                      item.country === "North America" ||
                      item.country === "South America" ||
                      item.country === "Oceania" ||
                      item.country === "Australia" ||
                      item.country === "Europe" ||
                      item.country === "Antartica" ||
                      item.country === "Africa"
                    ) {
                      return <></>;
                    } else {
                      return (
                        <tr key={index}>
                          <td colSpan={2} key={index}>
                            <p
                              className="country-container"
                              onClick={() => displayCountry(item)}
                            >
                              <span className="country-name">
                                {item.country}
                              </span>
                              <span className="country-cases">
                                C: {item.cases}
                              </span>
                              <span className="country-deaths">
                                D: {item.deaths}
                              </span>
                              <span className="country-recoveries">
                                R: {item.recovered}
                              </span>
                            </p>
                          </td>
                        </tr>
                      );
                    }
                  })}
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
            <Map toBeMap={countryView.viewName} />
            {renderOverView()}
          </ItemContent>
        </ItemContainer>
      </ItemContainer>
    </DashBoardContainer>
  );
};

export default CountryInfo;
