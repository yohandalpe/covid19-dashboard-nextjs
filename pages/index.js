import Layout from "../components/MainLayout";
import fetch from "isomorphic-unfetch";
import NumberFormat from 'react-number-format';

const Index = props => (
  <Layout>
    <h1>COVID-19 Situation Report</h1>
    <h4>As at {props.stats.update_date_time}</h4>
    <hr></hr>
    <h2 className="my-3">Local (Sri Lanka)</h2>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3 border-info">
          <div className="card-body text-info">
            <h3 className="card-title"><NumberFormat value={props.stats.local_new_cases} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              New Cases
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-secondary">
          <div className="card-body text-secondary">
            <h3 className="card-title"><NumberFormat value={props.stats.local_total_cases} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Total Cases
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-success">
          <div className="card-body text-success">
            <h3 className="card-title"><NumberFormat value={props.stats.local_recovered} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Recovered
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3 border-dark">
          <div className="card-body text-dark">
            <h3 className="card-title"><NumberFormat value={props.stats.local_deaths} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Deaths
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-danger">
          <div className="card-body text-danger">
            <h3 className="card-title"><NumberFormat value={props.stats.local_new_deaths} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              New Deaths
            </p>
          </div>
        </div>
      </div>
    </div>
   

    <h2 className="my-3">Global</h2>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3 border-info">
          <div className="card-body text-info">
            <h3 className="card-title"><NumberFormat value={props.stats.global_new_cases} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              New Cases
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-secondary">
          <div className="card-body text-secondary">
            <h3 className="card-title"><NumberFormat value={props.stats.global_total_cases} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Total Cases
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-success">
          <div className="card-body text-success">
            <h3 className="card-title"><NumberFormat value={props.stats.global_recovered} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Recovered
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3 border-dark">
          <div className="card-body text-dark">
            <h3 className="card-title"><NumberFormat value={props.stats.global_deaths} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              Deaths
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3 border-danger">
          <div className="card-body text-danger">
            <h3 className="card-title"><NumberFormat value={props.stats.global_new_deaths} displayType={'text'} thousandSeparator={true} prefix={''} /></h3>
            <p className="card-text">
              New Deaths
            </p>
          </div>
        </div>
      </div>
    </div>

    <h2 className="my-3">Hospital Data</h2>
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th rowSpan="2">Name of the Hospital</th>
            <th colSpan="3">
              Cumulative count of individuals on treatment/observation
            </th>
            <th colSpan="3">
              Count of individuals currently on treatment/observation
            </th>
          </tr>
          <tr>
            <th>Sri Lankans</th>
            <th>Foreigners</th>
            <th>Total</th>
            <th>Sri Lankans</th>
            <th>Foreigners</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.stats.hospital_data.map(hospital_data => (
            <tr key={hospital_data.id}>
              <td>{hospital_data.hospital.name}</td>
              <td><NumberFormat value={hospital_data.cumulative_local} displayType={'text'} thousandSeparator={true} prefix={''} /></td>
              <td><NumberFormat value={hospital_data.cumulative_foreign} displayType={'text'} thousandSeparator={true} prefix={''} /></td>
              <td><NumberFormat value={hospital_data.cumulative_local + hospital_data.cumulative_foreign} displayType={'text'} thousandSeparator={true} prefix={''} /></td>
              <td><NumberFormat value={hospital_data.treatment_local} displayType={'text'} thousandSeparator={true} prefix={''} /></td>
              <td><NumberFormat value={hospital_data.treatment_foreign} displayType={'text'} thousandSeparator={true} prefix={''} /></td>
              <td><NumberFormat value={hospital_data.treatment_local + hospital_data.treatment_foreign} displayType={'text'} thousandSeparator={true} prefix={''} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <footer className="footer mt-auto py-3">
      <p>
        Data Source:{" "}
        <a href="http://hpb.health.gov.lk/" target="_blank">
          Health Promotion Bureau of Sri Lanka
        </a>
      </p>
      <ul className="list-unstyled">
        <li><strong>Important Links</strong></li>
        <li><a href="https://www.dgi.gov.lk/" target="_blank">The Department of Government Information</a></li>
        <li><a href="http://epid.gov.lk/" target="_blank">The Epidemiology Unit, Ministry of Health</a></li>
      </ul>

      <p className="mt-3">
        Built and maintained by{" "}
        <a href="https://dalpatadu.com/" target="_blank">
          Yohan Dalpatadu
        </a>
        {" "} |{" "}
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
