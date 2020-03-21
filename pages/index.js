import Layout from "../components/MainLayout";
import fetch from "isomorphic-unfetch";
import NumberFormat from "react-number-format";
import Link from "next/link";

const Index = props => (
  <Layout>
    <h1>COVID-19 Situation Report - Global</h1>
    <h4>As at {props.stats.update_date_time} IST</h4>
    <hr></hr>

    <h2 className="my-3">Total</h2>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3 border-info">
          <div className="card-body text-info">
            <h3 className="card-title">
              <NumberFormat
                value={props.stats.global_new_cases}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />
            </h3>
            <p className="card-text">New Cases</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-secondary">
          <div className="card-body text-secondary">
            <h3 className="card-title">
              <NumberFormat
                value={props.stats.global_total_cases}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />
            </h3>
            <p className="card-text">Total Cases</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-success">
          <div className="card-body text-success">
            <h3 className="card-title">
              <NumberFormat
                value={props.stats.global_recovered}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />
            </h3>
            <p className="card-text">Recovered</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3 border-dark">
          <div className="card-body text-dark">
            <h3 className="card-title">
              <NumberFormat
                value={props.stats.global_deaths}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />
            </h3>
            <p className="card-text">Deaths</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-danger">
          <div className="card-body text-danger">
            <h3 className="card-title">
              <NumberFormat
                value={props.stats.global_new_deaths}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />
            </h3>
            <p className="card-text">New Deaths</p>
          </div>
        </div>
      </div>
    </div>
    <p className="lead">Reports by Country: </p>
    <div
      className="btn-group mb-5"
      role="group"
      aria-label="Reports by Country"
    >
      <Link href="/italy">
        <a className="btn btn-secondary" role="button">
          Italy
        </a>
      </Link>
      <Link href="/japan">
        <a className="btn btn-secondary" role="button">
          Japan
        </a>
      </Link>
      <Link href="/sri-lanka">
        <a className="btn btn-secondary" role="button">
          Sri Lanka
        </a>
      </Link>
    </div>
    <footer className="footer mt-auto py-3">
      <p>
        Data Source:{" "}
        <a href="http://hpb.health.gov.lk/" target="_blank">
          Health Promotion Bureau of Sri Lanka
        </a>
      </p>
      <ul className="list-unstyled">
        <li>
          <strong>Important Links</strong>
        </li>
        <li>
          <a href="https://www.dgi.gov.lk/" target="_blank">
            The Department of Government Information
          </a>
        </li>
        <li>
          <a href="http://epid.gov.lk/" target="_blank">
            The Epidemiology Unit, Ministry of Health
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
    "http://hpb.health.gov.lk/api/get-current-statistical"
  );
  const resData = await res.json();

  // Pass data to the page via props
  return {
    stats: resData.data
  };
};

export default Index;
