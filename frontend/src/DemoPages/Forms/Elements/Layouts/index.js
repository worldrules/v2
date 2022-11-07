import React, {Fragment} from 'react'

// import Tabs from 'react-responsive-tabs';
import { CardTitle } from 'reactstrap';

import PageTitle from '../../../../Layout/AppMain/PageTitle';
import TableResponsive from '../../../Tables/RegularTables/Examples/TableResponsive';

// Examples

import FormGrid from './Examples/FormGrid';
import FormGridFormRow from './Examples/FormGridFormRow';

const tabsContent = [
    {
        title: 'Layout ',
        content: <FormGridFormRow/>
    },
    {
        title: 'Grid',
        content: <FormGrid/>
    }


];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

class FormElementsLayouts extends React.Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Dispositivos"
                    subheading="Lista de Dispositivos"
                    icon="pe-7s-graph text-success"
                />
                {/* <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/> */}
                {/* mudando aqui */}
                <CardTitle>Dispositivos</CardTitle>
                <TableResponsive/>

            </Fragment>
        )
    }
}

export default FormElementsLayouts;



