import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CustomerOverview from "../../containers/Overviews/CustomerOverview";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { customerDetail } from "../../helpers/Static/Links";
// import CustomerForm from "../../containers/Forms/CustomerForm";
import Header from "../../components/Header/Header";
import moment from "moment";
import SecureStore from "secure-ls";
import { HeaderCustomerOverview } from "src/helpers/Static/Headers";
import { customer } from "src/helpers/Static/System";

const CustomerDetail: React.FC = () => {
  const sc = new SecureStore();

  const [customers, setCustomers] = useState<any>();

  useEffect(() => {
    const activeCustomer = sc.get("SelectedCustomer");
    console.log("active cs :", activeCustomer);
    if (activeCustomer) {
      setCustomers(activeCustomer);
    }
  }, []);
  if (!customers) return null;
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
                <Header
                  titleFirst={HeaderCustomerOverview.titleFirst}
                  linkFirst={HeaderCustomerOverview.linkFirst}
                  titleSecond={`${customers.Name} ${customers.Surname}`}
                />
                <CustomerOverview data={customers} />
              </>
            )}
          />
          <Route
            exact
            path={customerDetail.edit.link}
            render={() => (
              <>
                <Header titleFirst="wdaw" />
                {/* <CustomerForm data={customers} /> */}
              </>
            )}
          />
        </Switch>
      </RightLayout>
    </>
  );
};

export default CustomerDetail;
