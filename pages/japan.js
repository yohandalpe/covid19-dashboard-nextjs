import Layout from "../components/MainLayout";
import fetch from "isomorphic-unfetch";
import NumberFormat from "react-number-format";

const Index = props => (
  <Layout>
    <h1>COVID-19 Situation Report in Japan</h1>

    <h4>As at {props.updated.map((updated, i) => ( 
    <span key={i} >{updated.lastupdated}</span> ))}
    </h4>
    <hr></hr>
    <h2 className="my-3">Total</h2>
    <div className="row">
    {props.stats.slice(0,1).map(prefectures => (
      <div key={prefectures.prefecture} className="col-sm-4">
        <div className="card mb-3 border-info">
          <div className="card-body text-info">
            <h3 className="card-title"><NumberFormat value={prefectures.cases} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Cases
            </p>
          </div>
        </div>
      </div>
      ))}
      {props.stats.slice(0,1).map(prefectures => (
      <div key={prefectures.prefecture} className="col-sm-4">
        <div className="card mb-3 border-success">
          <div className="card-body text-success">
            <h3 className="card-title"><NumberFormat value={prefectures.recovered} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Recovered
            </p>
          </div>
        </div>
      </div>
      ))}
      {props.stats.slice(0,1).map(prefectures => (
      <div key={prefectures.prefecture} className="col-sm-4">
        <div className="card mb-3 border-danger">
          <div className="card-body text-danger">
            <h3 className="card-title"><NumberFormat value={prefectures.deaths} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Deaths
            </p>
          </div>
        </div>
      </div>
      ))}
    </div>
    <h2 className="my-3">Prefecture Data</h2>
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Prefecture</th>
            <th>Cases</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {props.stats.slice(1).map(prefectures => (
            <tr key={prefectures.prefecture}>
              <td>
                {prefectures.prefecture} ({prefectures.prefectureja})
              </td>
              <td>
                <NumberFormat
                  value={prefectures.cases}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={prefectures.recovered}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={prefectures.deaths}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h2 className="my-3">Daily Report</h2>
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deceased</th>
            <th>Critical</th>
            <th>Tested</th>
          </tr>
        </thead>
        <tbody>
          {props.daily.map((daily, i) => (
            <tr key={i}>
              <td>{daily.date}</td>
              <td>
                <NumberFormat
                  value={daily.confirmed}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={daily.recovered}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={daily.deceased}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={daily.critical}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={daily.tested}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <footer className="footer mt-auto py-3">
      <p>
        Data Source:{" "}
        <a href="https://covid19japan.com/" target="_blank">
          Japan COVID-19 Coronavirus Tracker
        </a>
      </p>
      <ul className="list-unstyled">
        <li>
          <strong>Important Links</strong>
        </li>
        <li>
          <a
            href="http://idsc.tokyo-eiken.go.jp/diseases/2019-ncov/"
            target="_blank"
          >
            Information from the Tokyo Metropolitan Infectious Disease
            Surveillance Center
          </a>
        </li>
      </ul>

      <p className="mt-3">
        Built and maintained by{" "}
        <a href="https://dalpatadu.com/" target="_blank">
          Yohan Dalpatadu
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/yohandalpe/covid19-dashboard-nextjs"
          target="_blank"
        >
          GitHub Repository
        </a>{" "}
      </p>
    </footer>
  </Layout>
);

Index.getInitialProps = async function() {
  // Fetch data from HPB API
  const res = await fetch(
    "https://covid19japan.s3.ap-northeast-1.amazonaws.com/data.json"
  );
  const resData = await res.json();

  // Pass data to the page via props
  return {
    stats: resData.prefectures,
    updated: resData.updated,
    daily: resData.daily
  };
};

export default Index;
