import Layout from "../components/MainLayout";
import fetch from "isomorphic-unfetch";
import NumberFormat from "react-number-format";

const Index = props => (
  <Layout>
    <h1>COVID-19 Situation Report in Italy</h1>

    <h4>
      As at{" "}
      {props.nationalLatest.map((nationalLatest, i) => (
        <span key={i}>{nationalLatest.data} UTC</span>
      ))}
    </h4>
    <hr></hr>
    <h2 className="my-3">Total</h2>
    <div className="row">
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-secondary">
            <div className="card-body text-secondary">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.ricoverati_con_sintomi}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">Hospitalised with Symptoms</p>
            </div>
          </div>
        </div>
      ))}
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-secondary">
            <div className="card-body text-secondary">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.terapia_intensiva}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">Intensive Therapy</p>
            </div>
          </div>
        </div>
      ))}
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-secondary">
            <div className="card-body text-secondary">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.totale_ospedalizzati}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">Total Hospitalised</p>
            </div>
          </div>
        </div>
      ))}
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-secondary">
            <div className="card-body text-secondary">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.isolamento_domiciliare}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">Home Insulation</p>
            </div>
          </div>
        </div>
      ))}
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-secondary">
            <div className="card-body text-secondary">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.totale_attualmente_positivi}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">Current Cases</p>
            </div>
          </div>
        </div>
      ))}
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-secondary">
            <div className="card-body text-secondary">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.nuovi_attualmente_positivi}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">New Cases</p>
            </div>
          </div>
        </div>
      ))}
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-info">
            <div className="card-body text-info">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.totale_casi}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">Total Cases</p>
            </div>
          </div>
        </div>
      ))}
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-success">
            <div className="card-body text-success">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.dimessi_guariti}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">Recovered</p>
            </div>
          </div>
        </div>
      ))}
      {props.nationalLatest.slice(0, 1).map((nationalLatest, i) => (
        <div key={i} className="col-sm-4">
          <div className="card mb-3 border-danger">
            <div className="card-body text-danger">
              <h3 className="card-title">
                <NumberFormat
                  value={nationalLatest.deceduti}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </h3>
              <p className="card-text">Deaths</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="my-3">Regional Data</h2>
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Region</th>
            <th>Hospitalised with Symptoms</th>
            <th>Intensive Therapy</th>
            <th>Total Hospitalised</th>
            <th>Home Insulation</th>
            <th>Current Cases</th>
            <th>New Cases</th>
            <th>Total Cases</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {props.regionLatest.map((regionLatest, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{regionLatest.denominazione_regione}</td>
              <td>
                <NumberFormat
                  value={regionLatest.ricoverati_con_sintomi}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={regionLatest.terapia_intensiva}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={regionLatest.totale_ospedalizzati}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={regionLatest.isolamento_domiciliare}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={regionLatest.totale_attualmente_positivi}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={regionLatest.nuovi_attualmente_positivi}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={regionLatest.totale_casi}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={regionLatest.dimessi_guariti}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />
              </td>
              <td>
                <NumberFormat
                  value={regionLatest.deceduti}
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
        <a href="https://github.com/pcm-dpc/COVID-19" target="_blank">
          COVID-19 Italy - Situation Monitoring
        </a>
      </p>
      <ul className="list-unstyled">
        <li>
          <strong>Important Links</strong>
        </li>
        <li>
          <a
            href="http://www.protezionecivile.it/attivita-rischi/rischio-sanitario/emergenze/coronavirus"
            target="_blank"
          >
            Department of Civil Protection Website - Coronavirus Emergency: The
            National Response
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
  // Fetch data from the JSON
  // Italy National Latest
  const resNationalLatest = await fetch(
    "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"
  );
  // Italy Region Latest
  const resRegionLatest = await fetch(
    "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"
  );

  const resDataNationalLatest = await resNationalLatest.json();
  const resDataRegionLatest = await resRegionLatest.json();

  // Pass data to the page via props
  return {
    nationalLatest: resDataNationalLatest,
    regionLatest: resDataRegionLatest
  };
};

export default Index;
