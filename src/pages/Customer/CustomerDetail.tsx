import React from "react";
import { Route, Switch } from "react-router-dom";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CustomerOverview from "../../containers/Overviews/CustomerOverview";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { customerDetail } from "../../helpers/Static/Links";
// import CustomerForm from "../../containers/Forms/CustomerForm";
import Header from "../../components/Header/Header";
import moment from "moment";

const CustomerDetail: React.FC = () => {
  //   componentWillMount() {
  //     const activeCustomer = JSON.parse(localStorage.getItem("SelectedCustomer"));
  //     if (activeCustomer) {
  //       activeCustomer.Gender = activeCustomer.Gender.toString();
  //       activeCustomer.BirthOfDateTime = moment(
  //         activeCustomer.BirthOfDateTime
  //       ).format("YYYY-MM-DD");
  //       activeCustomer.LicenseYear = moment(activeCustomer.LicenseYear).format(
  //         "YYYY-MM-DD"
  //       );

  //       this.setState({ customers: activeCustomer });
  //     }
  //   }

  return (
    <>
      <LeftLayout>
        <SubLink base={customerDetail.overview} />
        <SubLink base={customerDetail.edit} />
      </LeftLayout>

      <RightLayout>
        <Switch>
          <Route
            exact
            path={customerDetail.overview.link}
            render={() => (
              <>
                <Header titleFirst="dwa" />
                <CustomerOverview />
              </>
            )}
          />
          <Route
            exact
            path={customerDetail.edit.link}
            render={() => (
              <>
                <Header titleFirst="wdaw" />
                {/* <CustomerForm activeCustomer={customers} /> */}
              </>
            )}
          />
        </Switch>
      </RightLayout>

      {/* <h1>detaylar</h1> */}
    </>
  );
};

export default CustomerDetail;
