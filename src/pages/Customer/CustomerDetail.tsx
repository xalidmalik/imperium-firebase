import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { RightLayout } from "../../components/Layouts/Layouts";
import CustomerOverview from "../../containers/Overviews/CustomerOverview";
import { customerDetail } from "../../helpers/Static/Links";
import CustomerForm from "../../containers/Forms/CustomerForm";
import SecureStore from "secure-ls";
import Header from "../../components/Header/Header";
import {
  HeaderCustomerOverview,
  HeaderCustomerEdit,
} from "src/helpers/Static/Headers";

const CustomerDetail: React.FC = () => {
  const sc = new SecureStore();

  const [customers, setCustomers] = useState<any>();
  useEffect(() => {
    const activeCustomer = sc.get("SelectedCustomer");
    console.log(activeCustomer);
    if (activeCustomer) {
      setCustomers(activeCustomer);
    }
  }, []);

  if (!customers) return null;
  return (
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
              <Header
                titleFirst={HeaderCustomerEdit.titleFirst}
                linkFirst={HeaderCustomerEdit.linkFirst}
                titleSecond={`${customers.Name} ${customers.Surname}`}
                linkSecond={HeaderCustomerEdit.linkSecond}
                titleThird={HeaderCustomerEdit.titleThird}
                btnForm={HeaderCustomerEdit.btnForm}
                btnTitle={HeaderCustomerEdit.btnTitle}
              />
              <CustomerForm activeCustomer={customers} />
            </>
          )}
        />
      </Switch>
    </RightLayout>
  );
};

export default CustomerDetail;
