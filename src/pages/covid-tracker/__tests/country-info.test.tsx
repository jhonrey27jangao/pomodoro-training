import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CountryInfo from "../country-info";

describe("Test for Country Info Component", () => {
  let info = {
    cases: 0,
    deaths: 0,
    recovered: 0,
  };
  let countries: any = [];
  beforeEach(() => {
    info = {
      cases: 0,
      deaths: 0,
      recovered: 0,
    };
    countries = [
      {
        country: "North America",
        cases: 725964,
        todayCases: 1404,
        deaths: 36785,
        todayDeaths: 76,
        recovered: 70681,
        active: 618498,
        critical: 14453,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        totalTests: 0,
        testsPerOneMillion: 0,
      },
      {
        country: "Europe",
        cases: 1015674,
        todayCases: 167,
        deaths: 92240,
        todayDeaths: 16,
        recovered: 280153,
        active: 643281,
        critical: 27809,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        totalTests: 0,
        testsPerOneMillion: 0,
      },
      {
        country: "Asia",
        cases: 346664,
        todayCases: 694,
        deaths: 13726,
        todayDeaths: 1300,
        recovered: 166147,
        active: 166791,
        critical: 6471,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        totalTests: 0,
        testsPerOneMillion: 0,
      },
      {
        country: "South America",
        cases: 67848,
        todayCases: 257,
        deaths: 3064,
        todayDeaths: 7,
        recovered: 25983,
        active: 38801,
        critical: 7601,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        totalTests: 0,
        testsPerOneMillion: 0,
      },
      {
        country: "Oceania",
        cases: 8003,
        todayCases: 37,
        deaths: 74,
        todayDeaths: 2,
        recovered: 4564,
        active: 3365,
        critical: 70,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        totalTests: 0,
        testsPerOneMillion: 0,
      },
      {
        country: "Africa",
        cases: 19068,
        todayCases: 75,
        deaths: 969,
        todayDeaths: 1,
        recovered: 4650,
        active: 13449,
        critical: 180,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        totalTests: 0,
        testsPerOneMillion: 0,
      },
      {
        country: "",
        cases: 721,
        todayCases: 0,
        deaths: 15,
        todayDeaths: 0,
        recovered: 644,
        active: 62,
        critical: 7,
        casesPerOneMillion: 0,
        deathsPerOneMillion: 0,
        totalTests: 0,
        testsPerOneMillion: 0,
      },
      {
        country: "World",
        cases: 2183942,
        todayCases: 2634,
        deaths: 146873,
        todayDeaths: 1402,
        recovered: 552822,
        active: 1484247,
        critical: 56591,
        casesPerOneMillion: 280,
        deathsPerOneMillion: 18,
        totalTests: 0,
        testsPerOneMillion: 0,
      },
      {
        country: "USA",
        cases: 678210,
        todayCases: 640,
        deaths: 34641,
        todayDeaths: 24,
        recovered: 57844,
        active: 585725,
        critical: 13369,
        casesPerOneMillion: 2049,
        deathsPerOneMillion: 105,
        totalTests: 3411394,
        testsPerOneMillion: 10306,
      },
      {
        country: "Spain",
        cases: 184948,
        todayCases: 0,
        deaths: 19315,
        todayDeaths: 0,
        recovered: 74797,
        active: 90836,
        critical: 7371,
        casesPerOneMillion: 3956,
        deathsPerOneMillion: 413,
        totalTests: 930230,
        testsPerOneMillion: 19896,
      },
      {
        country: "Total",
        cases: 168941,
        todayCases: 0,
        deaths: 22170,
        todayDeaths: 0,
        recovered: 40164,
        active: 106607,
        critical: 2936,
        casesPerOneMillion: 2794,
        deathsPerOneMillion: 367,
        totalTests: 1178403,
        testsPerOneMillion: 19490,
      },
    ];
  });
  it("should render Country Info component", () => {
    const { container, queryAllByText } = render(
      <CountryInfo countries={countries} worldInfo={info} />
    );
    expect(container).toMatchSnapshot();
    fireEvent.click(queryAllByText("↑ AB")[0]);
    fireEvent.click(queryAllByText("↓C")[0]);
    fireEvent.click(queryAllByText("↑C")[0]);
    fireEvent.click(queryAllByText("↑D")[0]);
    fireEvent.click(queryAllByText("↑R")[0]);
    fireEvent.click(queryAllByText("USA")[0]);
    fireEvent.click(queryAllByText("Heal covid here")[0]);
    fireEvent.change(document.getElementById("search") as HTMLElement, {
      target: { value: "philippines" },
    });
  });
});
